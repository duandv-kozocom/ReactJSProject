import { ROUTE_PATH } from "@/constants/routes";
import { NavLink } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <>
      <div className="w-[1180px] mx-auto flex items-center justify-between">
        <NavLink
          to={ROUTE_PATH.HOME.INDEX}
          className="flex items-center gap-x-1"
        >
          <div className="w-[150px]">
            <img src="../images/logo.png" alt="" />
          </div>
        </NavLink>
        <div className=" ml-[46px] flex my-5 w-[665px] h-10 items-center border-[#127FFF] border-[1px] rounded-[8px]">
          <input type="text" className="w-[420px] h-full rounded-l-lg px-2" />
          <select
            name=""
            id=""
            className="border-[#127FFF] text-[16px] border-x-[1px] h-full w-[145px]"
          >
            <option value="" className="mx-[10px]">
              All Category
            </option>
          </select>
          <button
            type="button"
            className="bg-[#127FFF] w-[100px] h-full rounded-r-lg"
          >
            <p className="text-white text-lg">Search</p>
          </button>
        </div>
        <div className="ml-[90px] flex gap-[15px]">
          <div className="inline-block">
            <img src="images/user-icon.svg" alt="" className="mx-auto" />
            <p className="text-xs text-gray-500 mt-1 inline-block">Profile</p>
          </div>
          <div className="inline-block">
            <img src="images/message-icon.svg" alt="" className="mx-auto" />
            <p className="text-xs text-gray-500 mt-1 inline-block">Message</p>
          </div>
          <div className="inline-block">
            <img src="images/heart-icon.svg" alt="" className="mx-auto" />
            <p className="text-xs text-gray-500 mt-1 inline-block">Order</p>
          </div>
          <NavLink to={ROUTE_PATH.CART.INDEX} className="">
            <div className="inline-block">
              <img src="images/cart-icon.svg" alt="" className="mx-auto" />
              <p className="text-xs text-gray-500 mt-1 inline-block">My cart</p>
            </div>
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="w-[1180px] justify-between flex my-4 mx-auto">
        <div className="gap-[28px] flex items-center text-[16px]">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <button type="button" className="ml-[-22px]">
            All category
          </button>
          <button type="button">Hot offers</button>
          <button type="button">Gift boxes</button>
          <button type="button">Projects</button>
          <button type="button">Menu item</button>
          <button type="button">Help</button>
        </div>
        <div className="items-center flex text-[16px]">
          <span>English, USD </span>
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
          <span className="ml-8 mr-1">Ship to</span>
          <img src="images/flag.png" alt="" />
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
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
      <hr />
      <div className="w-[1180px] mx-auto">{children}</div>
    </>
  );
}
