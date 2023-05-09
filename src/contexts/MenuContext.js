import React, { useState } from "react";

export const MenuContext = React.createContext({
  isOpen: false,
  setIsOpen: () => {},
});

export const MenuProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  const { isOpen, setIsOpen } = React.useContext(MenuContext);
  return {
    isOpen,
    setIsOpen,
  };
};
