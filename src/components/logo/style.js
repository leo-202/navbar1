import styled from "styled-components";
import { Link } from "./../link/Link";
import { device } from "./../../styles/devices";

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;

  @media ${device.laptop} {
    padding: 0px 2.76vw;
  }
`;

export const StyledLogo = styled.img`
  height: 4.8vw;

  @media ${device.laptop} {
    height: 1.8vw;
    padding-left: 0px;
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  z-index: 999;
`;

export const CompanyName = styled.title`
  display: inline-block;
  padding-left: 2vw;
  font-size: 2em;
  font-weight: 600;
`;
