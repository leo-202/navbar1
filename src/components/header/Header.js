import React from "react";
import { HeaderWrapper } from "./style";
import BurgerMenu from "./../burgerMenu/BurgerMenu";
import Logo from "./../logo/Logo";

const Header = () => {
  return (
    <HeaderWrapper>
      <BurgerMenu />
      <Logo />
    </HeaderWrapper>
  );
};

export default Header;
