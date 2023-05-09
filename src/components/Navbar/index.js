import BurgerButton from "./BurgerButton";
import Menu from "./Menu";
import { Icons } from "@/components";
import { useMenuContext } from "@/contexts/MenuContext";
import { cn } from "@/utils";
import React from "react";
import { useLockBodyScroll } from "react-use";

const Navbar = () => {
  const { isOpen } = useMenuContext();
  useLockBodyScroll(isOpen);

  return (
    <>
      <div className="fixed z-50 w-screen flex items-center justify-between py-6 px-14 top-0 left-0 ">
        <div className={cn(isOpen ? "text-white" : "text-gray-900")}>
          <Icons.star height={18} />
        </div>

        <div className="flex items-center">
          <BurgerButton />
        </div>
      </div>
      <Menu />
    </>
  );
};

export default Navbar;
