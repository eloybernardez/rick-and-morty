import React, { useContext } from "react";
import Characters from "./Characters";
import styled from "styled-components";

const StyledMain = styled.main`
  position: relative;
  background: ${({ dark }) => (dark ? "black" : "white")};
  color: ${({ dark }) => (dark ? "white" : "black")};
  text-align: center;
  font-size: 1.6rem;
`;

const Main = () => {
  return (
    <StyledMain>
      <Characters />
    </StyledMain>
  );
};

export default Main;
