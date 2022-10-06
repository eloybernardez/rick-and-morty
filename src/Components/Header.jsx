import React, { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../context/ColorContext";

const HeaderContainer = styled.header`
  background-color: ${({ dark }) => (dark ? "black" : "white")};
  padding: 1rem;
`;

const HeaderTitle = styled.h1`
  font-family: "Get Schwifty", sans-serif;
  font-size: 8rem;
  text-align: center;
  color: ${({ dark }) => (dark ? "#6cac6c" : "#1b6f20")};
`;

const HeaderDescription = styled.p`
  font-family: sans-serif;
  padding: 0 1.2rem;
  font-size: 2.5rem;
  color: ${({ dark }) => (dark ? "white" : "black")};
`;

const HeaderButton = styled.button`
  font-family: sans-serif;
  cursor: pointer;
  margin: 0 auto;
  margin: 1rem;
  padding: 1rem;
  border: 0.1rem solid ${({ dark }) => (dark ? "#d3dfe6" : "#272727")};
  border-radius: 1.2rem;
  background: #ff9800;
  color: ${({ dark }) => (dark ? "#d3dfe6" : "#272727")};
`;

const HeaderButtonContainer = styled.nav`
  display: flex;
  justify-content: center;
`;

const Header = () => {
  const { darkMode, handleClick } = useContext(ColorContext);
  return (
    <HeaderContainer dark={darkMode}>
      <HeaderTitle dark={darkMode}>Rick and Morty</HeaderTitle>

      <HeaderButtonContainer>
        <HeaderButton type="button" onClick={handleClick}>
          {darkMode ? "🌛" : "🌞"} Mode
        </HeaderButton>
      </HeaderButtonContainer>

      <HeaderDescription dark={darkMode}>
        Rick, an alcoholic sociopath and scientist, lives with his daughter
        Beth's family. Apart from building gadgets, he takes his morally right
        but dimwit grandson Morty on absurd intergalactic adventures.
      </HeaderDescription>
    </HeaderContainer>
  );
};

export default Header;
