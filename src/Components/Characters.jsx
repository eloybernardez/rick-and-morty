import React, { useRef, useReducer, useState, useMemo } from "react";
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
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleClick = (favorite) =>
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });

  // cambio search por searchInput donde tenemos la referencia al value del input
  const handleSearch = () => setSearch(searchInput.current.value);

  // const filteredCharacters = newCharacters.filter((user) => {
  //   return user.name.toLowerCase().includes(search.toLowerCase());
  // });

  const filteredCharacters = useMemo(
    () =>
      newCharacters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [newCharacters, search]
  );

  return (
    <section>
      {favorites.favorites.map((favorite) => (
        <li key={`${favorite.id}`}>{favorite.name}</li>
      ))}

      <div className="Search">
        <input
          type="text"
          value={search}
          ref={searchInput}
          onChange={handleSearch}
        />
      </div>

      <StyledDiv>
        {filteredCharacters.map((char) => {
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
