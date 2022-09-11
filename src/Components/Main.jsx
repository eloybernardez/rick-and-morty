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

const StyledButton = styled.button`
  font-family: monospace;
  margin: 1rem;
  padding: 1rem;
  background: ${({ dark }) => (!dark ? "#d3dfe6" : "#272727")};
  color: ${({ dark }) => (dark ? "#d3dfe6" : "#272727")};
`;

const Main = () => {
  const { darkMode, handleClick } = useContext(ColorContext);
  return (
    <StyledMain dark={darkMode}>
      <StyledButton dark={darkMode} type="button" onClick={handleClick}>
        {darkMode ? "Dark" : "Light"} Mode
      </StyledButton>

      <Characters dark={darkMode} />
    </StyledMain>
  );
};

export default Main;
