import { PopupDeleteProduct } from "@/components/Popup/PopupDeleteProduct";
import { ROUTE_PATH } from "@/constants/routes";
import { DATA } from "@/utils/data";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { NavLink, useNavigate } from "react-router-dom";
import { Product } from "./types/Product";
import { toast } from "react-toastify";

interface Props {
  setProductsInCart: (value: any) => void;
  searchTerm: any;
}

export function ProductsListing({ setProductsInCart, searchTerm }: Props) {
  const [openPopupDelete, setOpenPopupDelete] = useState<boolean>(false);
  const [listProducts, setListProducts] = useState<Product[]>([]);
  const [idDeleteProduct, setIdDeleteProduct] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const storedCartItems = sessionStorage.getItem("cartItems");
  const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

  const [cartItems, setCartItems] = useState(initialCartItems);
  const addToCart = async (product: any) => {
    const updatedCartItems = [...cartItems];
    const existingItemIndex = updatedCartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingItemIndex !== -1) {
      updatedCartItems[existingItemIndex].quantity++;
    } else {
      updatedCartItems.push({ ...product, quantity: 1 });
    }

    await setCartItems(updatedCartItems);
    await sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    await setProductsInCart(updatedCartItems.length);
  };
  const navigate = useNavigate();

  const fetchDataProduct = () => {
    setListProducts(DATA);
    if (searchTerm !== undefined) {
      const filteredProducts = DATA.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setListProducts(filteredProducts);
    }
  };
  const handleDeleteProduct = async (idProduct: string) => {
    try {
      await setIsLoading(true);
      await setTimeout(() => {
        listProducts.forEach((item, index) => {
          if (item.id === idProduct) {
            listProducts.splice(index, 1);
          }
        });
        setIsLoading(false);
      }, 1000);
      await toast.success("Xoá sản phẩm thành công!");
    } catch (error) {
      toast.error("Một lỗi đã xảy ra");
    }
  };

  useEffect(() => {
    fetchDataProduct();
  }, [cartItems]);

  const handleClickDetailPatient = (id: string) => {
    const route = ROUTE_PATH.PRODUCTS.DETAIL.replace(":id", id);
    return navigate(route);
  };
  const handleClickEditProduct = (id: string) => {
    const route = ROUTE_PATH.PRODUCTS.EDIT.replace(":id", id);
    return navigate(route);
  };

  return (
    <>
      <Helmet>
        <title>List Products</title>
        <meta name="description" content="List Products" />
      </Helmet>
      <div className={`${isLoading && "opacity-[0.2]"}`}>
        <div className="flex justify-between mr-6">
          {searchTerm !== undefined ? (
            <h1 className="text-[30px] mb-5">{`Kết quả tìm kiếm: "${searchTerm}"`}</h1>
          ) : (
            <h1 className="text-[30px] mb-5">List product</h1>
          )}
          <NavLink to={ROUTE_PATH.PRODUCTS.CREATE} className="">
            <button
              type="button"
              className="rounded w-40 h-10 bg-[#0D6EFD] text-[16px] text-white"
            >
              Create new product
            </button>
          </NavLink>
        </div>
        {listProducts?.map((item: Product) => (
          <div
            key={item.id}
            className="flex rounded border border-gray-300 relative w-[880px] mb-5"
          >
            <img src={item.image} className="w-[210px] h-[210px] m-2" alt="" />{" "}
            <button
              onClick={() => handleClickEditProduct(item.id)}
              className="absolute right-[130px] top-4 flex items-center border-[2px] border-gray-300 px-3 py-1 rounded text-[16px] hover:text-[#0D6EFD] hover:border-[#0D6EFD]"
            >
              Edit
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => {
                setOpenPopupDelete(true);
                setIdDeleteProduct(item.id);
              }}
              className="absolute right-4 top-4 flex items-center border-[2px] border-gray-300 px-3 py-1 rounded text-[16px] hover:text-[#0D6EFD] hover:border-[#0D6EFD]"
            >
              Delete
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </button>
            <div className="pt-5">
              <p className="text-[20px]">{item.name}</p>
              <span className="text-[22px]">${item.price}</span>
              <span className="ml-2 text-[22px] text-gray-500 line-through">
                ${item.discount}
              </span>
              <div className="flex items-center text-[16px] ">
                <img src="images/rating.png" alt="" />
                <span className="ml-1 mr-3 text-[#FF9017]">
                  {item.evaluate}
                </span>
                <span className="text-gray-500">{item.order} orders</span>
                <span className="mx-3 text-[#00B517]">Free Shipping</span>
              </div>
              <p className="text-[18px] text-gray-500 break-all overflow-hidden line-clamp-2 mr-4">
                {item.description}
              </p>
              <div className="flex">
                <p
                  onClick={() => handleClickDetailPatient(item.id)}
                  className="text-[#0D6EFD] text-[16px]"
                >
                  View detail
                </p>
                <button
                  onClick={() => addToCart(item)}
                  className="ml-3 rounded w-40 h-10 bg-[#FA3434] flex items-center justify-center text-white text-[16px] absolute right-4 bottom-4 hover:text-[#FA3434] hover:bg-[#ffffff] border hover:border-[#FA3434]"
                >
                  Add to cart
                  <img
                    src="images/cart-icon.svg"
                    className="ml-2 text-white"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isLoading && (
        <div
          role="status"
          className="fixed z-10 justify-center top-1/2 left-1/2 items-center transform -translate-x-1/2 -translate-y-1/2"
        >
          <svg
            aria-hidden="true"
            className="h-20 w-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {openPopupDelete && !isLoading && (
        <PopupDeleteProduct
          setOpenPopupDelete={setOpenPopupDelete}
          handleDeleteProduct={handleDeleteProduct}
          idDeleteProduct={idDeleteProduct}
        />
      )}
    </>
  );
}
