import styled from "styled-components";
import { colors } from "./../../styles/colors";
import { fonts } from "./../../styles/typography";

export const ImageWrapper = styled.div`
  display: block;
  /* width: 100% !important; */
  height: 100%;
  position: relative;
`;

export const SliderImage = styled.img`
  display: block;
  box-sizing: border-box;
  height: 53.333vw;
  width: 100% !important;
  padding: 0px 2vw;
  object-fit: cover;
`;

export const ImageTitle = styled.h3`
  position: absolute;
  bottom: 4vw;
  left: 8vw;
  font-size: 4vw;
  font-family: ${fonts.fontPrimary};
  letter-spacing: 0.025em;
  color: ${colors.COLOR_WHITE};
  z-index: 10;
`;
