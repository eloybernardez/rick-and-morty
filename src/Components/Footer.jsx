import React, { useContext } from "react";
import ColorContext from "../context/ColorContext";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 400px;
  width: 100%;
  background-color: ${({ dark }) => (dark ? "#000000" : "#ffffff")};
`;

const Footer = () => {
  const { darkMode } = useContext(ColorContext);
  return <StyledFooter dark={darkMode} id="footer"></StyledFooter>;
};

export default Footer;
