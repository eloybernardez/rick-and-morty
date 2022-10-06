import React, { useState } from "react";
import styled from "styled-components";

const CharacterContainer = styled.main`
  background: ${({ dark }) => (!dark ? "#272727" : "#d3dfe6")};
  color: ${({ dark }) => (dark ? "#272727" : "#d3dfe6")};
  width: 70%;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
  margin: 1.5rem 2rem;
`;
const CharacterImgContainer = styled.picture`
  width: 200px;
  height: auto;
`;

const CharacterImg = styled.img`
  width: 100%;
  height: auto;
`;

const CharacterTitle = styled.h3`
  font-family: "Get Schwifty";
  font-size: 2rem;
  font-weight: bolder;
  color: ${({ dark }) => (!dark ? "#6cac6c" : "#1b6f20")};
`;

const CharacterStatus = styled.p`
  font-weight: bolder;
  color: ${({ status }) => (status === "Alive" ? "#6cac6c" : "#ff9800")};
`;

const CharacterPropertiesList = styled.ul`
  padding: 0.5rem 0;
  list-style-type: none;
  font-weight: regular;
  color: ${({ dark }) => (!dark ? "#d3dfe6" : "#272727")};
  font-weight: bold;
`;

const CharacterProperty = styled.li`
  margin: 1rem 0;
`;

const CharacterButtonFavorite = styled.button`
  font-family: monospace;
  border-radius: 6px;
  border-color: #ff9800;
  background-color: transparent;
  cursor: pointer;
  color: ${({ dark }) => (!dark ? "#6cac6c" : "#1b6f20")};

  &:active {
    background-color: #6cac6c;
  }
`;

const Character = ({ character, handleAdd, handleRemove, dark }) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdded = () => {
    setIsAdded((prevState) => !prevState);
  };
  return (
    <CharacterContainer dark={dark}>
      <CharacterImgContainer>
        <CharacterImg src={character.image} alt={character.name} />
      </CharacterImgContainer>

      <CharacterTitle dark={dark}>{character.name}</CharacterTitle>

      <CharacterStatus status={character.status}>
        {character.status === "Alive" ? `😃 ` : `💀`} {character.status}
      </CharacterStatus>

      <CharacterPropertiesList dark={dark}>
        <CharacterProperty>
          {character.species === "Human" ? (
            <span>💁‍♂️ Human</span>
          ) : (
            <span>👽 Alien</span>
          )}{" "}
          {character.gender}
        </CharacterProperty>
        <CharacterProperty>
          <span>🌎 {character.origin.name}</span>
        </CharacterProperty>
      </CharacterPropertiesList>

      <CharacterButtonFavorite
        dark={dark}
        onClick={() => {
          isAdded ? handleRemove(character) : handleAdd(character);
          handleAdded();
        }}
      >
        {!isAdded ? "🥒 Favorite" : "✔ Added"}
      </CharacterButtonFavorite>
    </CharacterContainer>
  );
};

export default Character;
