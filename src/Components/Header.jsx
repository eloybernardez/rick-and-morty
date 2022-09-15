import React, { useContext, useState } from "react";
import styled from "styled-components";
import ThemeContext from "../context/ThemeContext";

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

const StyledButton = styled.button`
  font-family: monospace;
  margin: 1rem;
  padding: 1rem;
  border: 0.1rem solid ${({ dark }) => (dark ? "#d3dfe6" : "#272727")};
  border-radius: 1.2rem;
  background: ${({ dark }) => (!dark ? "#d3dfe6" : "#272727")};
  color: ${({ dark }) => (dark ? "#d3dfe6" : "#272727")};
`;

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const color = useContext(ThemeContext);

  const handleClick = () => setDarkMode(!darkMode);

  return (
    <StyledHeader>
      <StyledTitle style={{ color }}>Rick and Morty</StyledTitle>

      <StyledDescription>
        Rick, an alcoholic sociopath and scientist, lives with his daughter
        Beth's family. Apart from building gadgets, he takes his morally right
        but dimwit grandson Morty on absurd intergalactic adventures.
      </StyledDescription>

      <StyledType>Characters</StyledType>

      <StyledButton type="button" onClick={handleClick}>
        {darkMode ? "Dark" : "Light"} Mode
      </StyledButton>
    </StyledHeader>
  );
};

export default Header;
