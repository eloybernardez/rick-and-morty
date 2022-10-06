import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100%;
  height: 400px;
`;

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <div>Created with React</div>
    </StyledFooter>
  );
};

export default Footer;
