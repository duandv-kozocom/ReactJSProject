import { ROUTE_PATH } from "@/constants/routes";
import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export function ProductsListing() {
  return (
    <>
      <Helmet>
        <title>List Products</title>
        <meta name="description" content="List Products" />
      </Helmet>
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
