import React, { useReducer } from "react";
import Character from "./Character";
import useGetCharacters from "../hooks/useGetCharacters";
import styled from "styled-components";

const StyledDiv = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
`;

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      };
    default:
      return state;
  }
};

const Characters = ({ dark }) => {
  const { newCharacters } = useGetCharacters();
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const handleClick = (favorite) =>
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });

  return (
    <section>
      {favorites.favorites.map((favorite) => (
        <li key={`${favorite.id}`}>{favorite.name}</li>
      ))}

      <StyledDiv>
        {newCharacters.map((char) => {
          return (
            <div key={`Character-${char.id}`}>
              <Character character={char} dark={dark} />
              <button onClick={() => handleClick(char)}>
                Add to favorites
              </button>
            </div>
          );
        })}
      </StyledDiv>
    </section>
  );
};

export default Characters;
