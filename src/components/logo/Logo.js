import React from "react";
import { LogoWrapper, StyledLogo, CompanyName } from "./style";
import { Link } from "./../link/Link";
import logo from "./../../static/pawprint.png";

const Logo = () => {
  return (
    <Link to="">
      <LogoWrapper>
        <StyledLogo src={logo} />
        <CompanyName>Company name</CompanyName>
      </LogoWrapper>
    </Link>
  );
};

export default Logo;
