import React from "react";
import Character from "./Character";
import useGetCharacters from "../hooks/useGetCharacters";
import styled from "styled-components";

const StyledDiv = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
`;

const Characters = ({ dark }) => {
  const { newCharacters } = useGetCharacters();

  return (
    <section>
      <StyledDiv>
        {newCharacters.map((char) => (
          <Character
            key={`Character-${char.id}`}
            character={char}
            dark={dark}
          />
        ))}
      </StyledDiv>
    </section>
  );
};

export default Characters;
