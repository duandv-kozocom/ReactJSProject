import { ROUTE_PATH } from "@/constants/routes";
import { NavLink } from "react-router-dom";

interface ISidebarProps {
  isCollapse: boolean;
  onToggleNavbar: () => void;
}

export default function Sidebar({ isCollapse, onToggleNavbar }: ISidebarProps) {
  return (
    <div
      className={`${isCollapse ? "w-sidebar lg:w-sidebar-collapse" : "w-sidebar-none lg:w-sidebar"}`}
    >
      <div
        className="text-[#1C1C1C] my-5 ml-[14px] mr-[11px]"
        role="group"
      >
        <NavLink to={ROUTE_PATH.PRODUCTS.LIST} >
          <button
            type="button"
            onClick={onToggleNavbar}
            className="text-left w-[250px] h-10 mb-[10px] font-[400] text-gray-600 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:font-[600] focus:bg-[#E5F1FF]"
          >
            <span className="text-[16px] p-3">List Products</span>
          </button>
        </NavLink>

        <NavLink
          to={ROUTE_PATH.HOME.INDEX}
          className="flex items-center gap-x-1"
        >
          <button
            type="button"
            onClick={onToggleNavbar}
            className="text-left w-[250px] h-10 mb-[10px] font-[400] text-gray-600 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:font-[600] focus:bg-[#E5F1FF]"
          >
            <span className="text-[16px] p-3">Clothes and wear</span>
          </button>
        </NavLink>

        <NavLink
          to={ROUTE_PATH.HOME.INDEX}
          className="flex items-center gap-x-1"
        >
          <button
            type="button"
            onClick={onToggleNavbar}
            className="text-left w-[250px] h-10 mb-[10px] font-[400] text-gray-600 bg-white rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:font-[600] focus:bg-[#E5F1FF]"
          >
            <span className="text-[16px] p-3">Computer and tech</span>
          </button>
        </NavLink>
      </div>
    </div>
  );
}
