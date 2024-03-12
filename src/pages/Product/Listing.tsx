import { ROUTE_PATH } from "@/constants/routes";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

<<<<<<< Updated upstream
export function ProductsListing() {
=======
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

>>>>>>> Stashed changes
  return (
    <>
      <Helmet>
        <title>List Products</title>
        <meta name="description" content="List Products" />
      </Helmet>
<<<<<<< Updated upstream
      <div>
        <div className="flex rounded border border-gray-300 relative w-[880px] mb-5">
          <img
            src="images/iphone.jpg"
            className="w-[210px] h-[210px] m-2"
            alt=""
          />
          <div className="pt-5">
            <p className="text-[20px]">Canon Cmera EOS 2000, Black 10x zoom</p>
            <span className="text-[22px]">$998.00</span>
            <span className="ml-2 text-[22px] text-gray-500 line-through">
              $1128.00
            </span>
            <div className="flex items-center text-[16px] ">
              <img src="images/rating.png" alt="" />
              <span className="ml-1 mr-3 text-[#FF9017]">7.5</span>
              <span className="text-gray-500">154 orders</span>
              <span className="mx-3 text-[#00B517]">Free Shipping</span>
            </div>
            <p className="text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex">
              <NavLink to={ROUTE_PATH.PRODUCTS.DETAIL} className="">
                <p className="text-[#0D6EFD] text-[16px]">View detail</p>
              </NavLink>
              <button className="ml-3 rounded w-40 h-10 bg-[#FA3434] flex items-center justify-center text-white text-[16px] absolute right-4 bottom-4">
                Add to cart
                <img
                  src="images/cart-icon.svg"
                  className="ml-2 text-white"
                  alt=""
                />
              </button>
=======
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
>>>>>>> Stashed changes
            </div>
          </div>
        </div>
        <div className="flex rounded border border-gray-300 relative w-[880px]">
          <img
            src="images/iphone.jpg"
            className="w-[210px] h-[210px] m-2"
            alt=""
          />
          <div className="pt-5">
            <p className="text-[20px]">Canon Cmera EOS 2000, Black 10x zoom</p>
            <span className="text-[22px]">$998.00</span>
            <span className="ml-2 text-[22px] text-gray-500 line-through">
              $1128.00
            </span>
            <div className="flex items-center text-[16px] ">
              <img src="images/rating.png" alt="" />
              <span className="ml-1 mr-3 text-[#FF9017]">7.5</span>
              <span className="text-gray-500">154 orders</span>
              <span className="mx-3 text-[#00B517]">Free Shipping</span>
            </div>
            <p className="text-[18px] text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className="flex">
              <p className="text-[#0D6EFD] text-[16px]">View detail</p>
              <button className="ml-3 rounded w-40 h-10 bg-[#FA3434] flex items-center justify-center text-white text-[16px] absolute right-4 bottom-4">
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
      </div>
    </>
  );
}
