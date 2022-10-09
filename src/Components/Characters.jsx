import React, {
  useCallback,
  useRef,
  useReducer,
  useState,
  useMemo,
} from "react";
import Character from "./Character";
import Search from "./Search";
import useGetCharacters from "../hooks/useGetCharacters";
import useLocalStorage from "../hooks/useLocalStorage";
import Spinner from "./Spinner";
import Favorites from "./Favorites";
import styled from "styled-components";

const CharactersContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
`;

const ErrorState = styled.p`
  font-size: 2.4rem;
  font-family: sans-serif;
`;

const API = "https://rickandmortyapi.com/api/character/";

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
    case "REMOVE_FROM_FAVORITE":
      return {
        ...state,
        favorites: [...state.favorites].filter(
          (favorite) => favorite.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};

const Characters = ({ dark }) => {
  const [favoritesStorage = storedValue, setStore = setValue] = useLocalStorage(
    "favs",
    initialState
  );
  const { newCharacters, loading, error } = useGetCharacters(API);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);
  const [favorites, dispatch] = useReducer(favoriteReducer, favoritesStorage);

  const handleAdd = (favorite) => {
    if (favorites.favorites.every((fav) => fav.id !== favorite.id)) {
      dispatch({
        type: "ADD_TO_FAVORITE",
        payload: { ...favorite, isFavorite: true },
      });
      setStore(favorites);
    }
  };

  const handleRemove = (favorite) => {
    dispatch({
      type: "REMOVE_FROM_FAVORITE",
      payload: { ...favorite, isFavorite: false },
    });

    setStore(favorites);
  };

  const handleSearch = useCallback(
    () => setSearch(searchInput.current.value),
    []
  );

  const filteredCharacters = useMemo(
    () =>
      newCharacters.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase());
      }),
    [newCharacters, search]
  );

  return (
    <section>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <Favorites favorites={favorites} />

      <CharactersContainer>
        {filteredCharacters.length > 0 &&
          !loading &&
          !error &&
          filteredCharacters.map((char) => {
            return (
              <div key={`Character-${char.id}`}>
                <Character
                  character={char}
                  handleAdd={handleAdd}
                  handleRemove={handleRemove}
                  dark={dark}
                />
              </div>
            );
          })}

        {!filteredCharacters.length && !error && loading && <Spinner />}

        {filteredCharacters.length === 0 && !loading && !error && (
          <ErrorState>
            No characters found! Maybe trying in another dimension? 🍄
          </ErrorState>
        )}

        {filteredCharacters.length === 0 && error && !loading && (
          <ErrorState>There was a error wubalubadubdub... ☄</ErrorState>
        )}
      </CharactersContainer>
    </section>
  );
};

export default Characters;
