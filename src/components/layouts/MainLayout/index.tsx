import Header from "@/components/layouts/Header";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

interface Props {
  children?: React.ReactNode;
}

export function MainLayout({ children }: Props) {
  const [isCollapse, setIsCollapse] = useState<boolean>(false);

  const handleToggleNavbar = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="w-[1180px] mx-auto">
      <Header />
      <div className="flex rounded-[8px] border border-gray-300 mt-5">
        <Sidebar isCollapse={isCollapse} onToggleNavbar={handleToggleNavbar} />
        <div className="w-full my-5">{children}</div>
      </div>
    </div>
  );
}
