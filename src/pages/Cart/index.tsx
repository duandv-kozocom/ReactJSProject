import { useEffect, useState } from "react";
import { ProductsInCart } from "../Product/types/Product";
import { NavLink } from "react-router-dom";
import { ROUTE_PATH } from "@/constants/routes";

interface Props {
  setProductsInCart: (value: any) => void;
}
export function Cart({ setProductsInCart }: Props) {
  const [countProducts, setCountProducts] = useState<number>(0);
  const [listProductsInCart, setListProductsInCart] = useState<any>();
  const countProductsInCart = () => {
    const storedValue = sessionStorage.getItem("cartItems");
    if (storedValue) {
      const cartItemsArray = JSON.parse(storedValue);
      const itemCount = cartItemsArray ? cartItemsArray.length : 0;
      setCountProducts(itemCount);
      setListProductsInCart(cartItemsArray);
    }
  };
  const removeProductInCart = (itemIdToRemove: string) => {
    const storedValue = sessionStorage.getItem("cartItems");
    const cartItemsArray = storedValue ? JSON.parse(storedValue) : [];
    const updatedCartItems = cartItemsArray.filter(
      (item: any) => item.id !== itemIdToRemove
    );
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setCountProducts(updatedCartItems.length);
  };
  const removeAllProducts = () => {
    sessionStorage.setItem("cartItems", JSON.stringify([]));
    setCountProducts(0);
  };
  const calculateCartItems = () => {
    let total = 0;
    if (listProductsInCart) {
      for (let i = 0; i < listProductsInCart.length; i++) {
        total += listProductsInCart[i].price * listProductsInCart[i].quantity;
      }
      return total;
    }
  };

  useEffect(() => {
    countProductsInCart();
    setProductsInCart(countProducts);
  }, [countProducts]);
  return (
    <>
      <h3 className="text-[30px] mt-[26px] mb-10">My cart({countProducts})</h3>
      <div>
        <div className="flex">
          <div className="border-gray-300 border-[1px] rounded px-4 pt-4 pb-20 w-[70%] relative">
            {listProductsInCart?.map((item: ProductsInCart) => (
              <div
                key={item.id}
                className="mt-5 p-4 border border-gray-300 rounded w-full"
              >
                <div className="relative w-full flex">
                  <img src={item.image} className="h-20 w-20" alt="" />
                  <div className="ml-2 text-[16px]">
                    <p className="text-black font-[500]">{item.name}</p>
                    <p className="text-gray-500">Design: {item.design} </p>
                    <p className="text-gray-500">
                      Customization: {item.customization}
                    </p>
                    <button
                      className="text-[#FA3434] rounded px-3 py-1 border border-gray-300 mt-2"
                      onClick={() => removeProductInCart(item.id)}
                    >
                      Remove
                    </button>
                    <button className="text-[#0D6EFD] rounded px-3 py-1 border border-gray-300 mt-2 ml-2">
                      Save for later
                    </button>
                  </div>
                  <div className="absolute right-0 top-0 text-[16px] font-semibold">
                    <p className="text-right mb-2">Giá : ${item.price}</p>
                    <div className="flex">
                      <p className="text-right">Số Lượng: </p>
                      <button type="button" className="ml-3 mr-1">
                        +
                      </button>
                      <input
                        type="text"
                        className="border-gray-300 border-[1px] w-7 h-5 text-center"
                        value={item.quantity}
                      />
                      <button type="button" className="ml-1">
                        -
                      </button>
                    </div>
                    <p className="text-right mt-3">
                      Tổng giá: ${item.price * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {countProducts === 0 && (
              <h2>Không có sản phẩm nào trong giỏ hàng</h2>
            )}
            <div className="flex justify-between">
              <NavLink to={ROUTE_PATH.PRODUCTS.LIST} className="">
                <button
                  className="flex items-center px-4 py-1 bg-[#0D6EFD] text-white rounded mt-4 absolute bottom-5"
                  type="button"
                >
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
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>
                  Back to shop
                </button>
              </NavLink>
              <button
                onClick={() => removeAllProducts()}
                className="px-4 py-1 text-[#0D6EFD] border border-gray-300 rounded mt-4 absolute bottom-5 right-5"
              >
                Remove all
              </button>
            </div>
          </div>

          <div className="w-[30%] text-[16px]">
            <div className="border border-gray-300 rounded ml-5">
              <p className="mt-3 ml-3">Have a coupon?</p>
              <div className="flex m-3">
                <input
                  type="text"
                  className="border border-gray-300 rounded-l-lg p-2 w-full"
                  placeholder="Add coupon"
                />
                <button className="text-[#0D6EFD] py-3 px-5 border border-gray-300 rounded-r-lg">
                  Apply
                </button>
              </div>
            </div>
            <div className="border border-gray-300 rounded mt-5 ml-5 text-[16px] text-gray-600">
              <div className="p-3">
                <div className="flex justify-between">
                  <p>Subtotal:</p>
                  <p>${calculateCartItems()}</p>
                </div>
                <div className="flex justify-between">
                  <p>Discount::</p>
                  <p className="text-[#FA3434]">- $60.00</p>
                </div>
                <div className="flex justify-between">
                  <p>Tax:</p>
                  <p className="text-[#00B517]">+ $14.00</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between font-[600]">
                  <p>Total:</p>
                  <p>${(calculateCartItems() as number) - 60 + 14}</p>
                </div>
                <button className="w-full h-10 text-white bg-[#00B517] rounded my-4">
                  Checkout
                </button>
                <div className="flex gap-5 justify-center">
                  <img src="/images/payment1.png" alt="" />
                  <img src="/images/payment2.png" alt="" />
                  <img src="/images/payment3.png" alt="" />
                  <img src="/images/payment4.png" alt="" />
                  <img src="/images/payment5.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
