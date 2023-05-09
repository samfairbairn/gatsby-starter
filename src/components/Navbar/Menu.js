import { useMenuContext } from "@/contexts/MenuContext";
import { cn } from "@/utils";
import React from "react";

const Menu = () => {
  const { isOpen } = useMenuContext();
  return (
    <div
      className={cn(
        "fixed flex items-center justify-center w-screen h-screen top-0 left-0 bg-slate-900 z-40 transition-opacity duration-200 text-white",
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <p>menu</p>
    </div>
  );
};

export default Menu;
