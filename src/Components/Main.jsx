import React, { useContext } from "react";
import Characters from "./Characters";
import styled from "styled-components";
import ColorContext from "../context/ColorContext";

const StyledMain = styled.main`
  position: relative;
  background: ${({ dark }) => (dark ? "black" : "white")};
  color: ${({ dark }) => (dark ? "white" : "black")};
  text-align: center;
  font-size: 1.6rem;
`;

const Main = () => {
  const { darkMode } = useContext(ColorContext);
  return (
    <StyledMain dark={darkMode}>
      <Characters dark={darkMode} />
    </StyledMain>
  );
};

export default Main;
