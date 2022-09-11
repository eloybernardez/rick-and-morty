import React, { useContext } from "react";
import styled from "styled-components";
import ColorContext from "../context/ColorContext";

const StyledHeader = styled.header`
  background-color: ${({ dark }) => (dark ? "black" : "white")};
  padding: 1rem;
`;

const StyledTitle = styled.h1`
  font-family: "Get Schwifty", sans-serif;
  font-size: 5rem;
  text-align: center;
  color: ${({ dark }) => (dark ? "#6cac6c" : "#1b6f20")};
`;

const StyledType = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: ${({ dark }) => (dark ? "white" : "black")};
`;

const StyledDescription = styled.p`
  padding: 0 1.2rem;
  font-size: 1.8rem;
  color: ${({ dark }) => (dark ? "white" : "black")};
`;

const Header = () => {
  const { darkMode } = useContext(ColorContext);
  return (
    <StyledHeader dark={darkMode}>
      <StyledTitle dark={darkMode}>Rick and Morty</StyledTitle>

      <StyledDescription dark={darkMode}>
        Rick, an alcoholic sociopath and scientist, lives with his daughter
        Beth's family. Apart from building gadgets, he takes his morally right
        but dimwit grandson Morty on absurd intergalactic adventures.
      </StyledDescription>

      <StyledType dark={darkMode}>Characters</StyledType>
    </StyledHeader>
  );
};

export default Header;
