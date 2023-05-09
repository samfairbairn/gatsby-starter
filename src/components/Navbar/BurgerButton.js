import "./burger.css";
import { useMenuContext } from "@/contexts/MenuContext";
import { cn } from "@/utils";
import React from "react";

const BurgerMenu = (props) => {
  const { isOpen, setIsOpen } = useMenuContext();

  const onClick = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div
      tabIndex="0"
      role="button"
      className={cn(
        `burger-menu relative flex items-center justify-center ml-6 cursor-pointer w-[80px] h-[80px] `,
        isOpen ? "is-open" : ""
      )}
      onKeyUp={onClick}
      onClick={onClick}
    >
      <div className="bars">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default BurgerMenu;
