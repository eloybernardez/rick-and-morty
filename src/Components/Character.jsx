import React from "react";
import styled from "styled-components";

const StyledDiv = styled.main`
  background: ${({ dark }) => (!dark ? "#272727" : "#d3dfe6")};
  color: ${({ dark }) => (dark ? "#272727" : "#d3dfe6")};
  width: 70%;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
  margin: 1.5rem 2rem;
`;
const StyledPicture = styled.picture`
  width: 200px;
  height: auto;
`;

const StyledImg = styled.img`
  width: 100%;
  height: auto;
`;

const StyledH3 = styled.h3`
  font-family: "Get Schwifty";
  font-size: 2rem;
  font-weight: bolder;
  color: ${({ dark }) => (!dark ? "#6cac6c" : "#1b6f20")};
`;

const StyledP = styled.p`
  font-weight: bolder;
  color: ${({ status }) => (status === "Alive" ? "#6cac6c" : "#ff9800")};
`;

const StyledUl = styled.ul`
  padding: 0.5rem 0;
  list-style-type: none;
  font-weight: regular;
  color: ${({ dark }) => (!dark ? "#d3dfe6" : "#272727")};
  font-weight: bold;
`;

const StyledLi = styled.li`
  margin: 1rem 0;
`;

const Character = ({ character, dark }) => {
  return (
    <StyledDiv dark={dark}>
      <StyledPicture>
        <StyledImg src={character.image} alt={character.name} />
      </StyledPicture>

      <StyledH3 dark={dark}>{character.name}</StyledH3>

      <StyledP status={character.status}>
        {character.status === "Alive" ? `😃 ` : `💀`} {character.status}
      </StyledP>

      <StyledUl dark={dark}>
        <StyledLi>
          {character.species === "Human" ? (
            <span>💁‍♂️ Human</span>
          ) : (
            <span>👽 Alien</span>
          )}{" "}
          {character.gender}
        </StyledLi>
        <StyledLi>
          <span>🌎 {character.origin.name}</span>
        </StyledLi>
      </StyledUl>
    </StyledDiv>
  );
};

export default Character;
