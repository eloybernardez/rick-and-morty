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
import Spinner from "./Spinner";
import styled from "styled-components";

const API = "https://rickandmortyapi.com/api/character";

const CharactersContainer = styled.section`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  place-items: center;
`;

const FavoriteContainer = styled.div`
  border-radius: 10px;
  width: 70%;
  margin: 1.5rem auto;
  border: 1px solid #ff9800;
`;

const FavoriteCard = styled.div`
  background-color: #272727;
  border-radius: 10px;
  padding: 0.5rem;
  width: 215px;
  margin: 1rem;
`;

const FavoritePicture = styled.picture`
  width: 60px;
  height: 60px;
`;

const FavoriteImg = styled.img`
  margin-top: 8px;
  width: 30%;
  border-radius: 50%;
`;

const FavoriteOrigin = styled.p`
  color: #ffffff;
`;

const FavoriteName = styled.p`
  font-size: 2.4rem;
  font-family: sans-serif;
  color: #6cac6c;
`;

const FavoriteContainerTitle = styled.h3`
  font-family: "Get Schwifty", monospace;
  color: #ff9800;
  font-size: 2.8rem;
  padding: 1rem 0;
`;

const FavoriteContainerList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const initialState = {
  favorites: [],
};

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      return {
        ...state,
        favorites: [...new Set([...state.favorites, action.payload])],
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
  const { newCharacters, loading, error } = useGetCharacters(API);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleAdd = (favorite) =>
    dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });

  const handleRemove = (favorite) =>
    dispatch({ type: "REMOVE_FROM_FAVORITE", payload: favorite });

  const handleSearch = useCallback(
    () => setSearch(searchInput.current.value),
    []
  );

  const filteredCharacters = useMemo(
    () =>
      newCharacters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [newCharacters, search]
  );

  const { favoriteCharacters = favorites.favorites } = favorites;

  return (
    <section>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      <FavoriteContainer>
        <FavoriteContainerTitle>Favorite characters</FavoriteContainerTitle>
        <FavoriteContainerList>
          {favoriteCharacters.length > 0 ? (
            favoriteCharacters.map((favorite) => (
              <FavoriteCard>
                <FavoritePicture>
                  <FavoriteImg
                    src={favorite.image}
                    alt={`Favorite-${favorite.name}`}
                  />
                </FavoritePicture>

                <FavoriteName>{favorite.name}</FavoriteName>
                <FavoriteOrigin>{favorite.origin.name}</FavoriteOrigin>
              </FavoriteCard>
            ))
          ) : (
            <FavoriteName>No favorites yet 🌀</FavoriteName>
          )}
        </FavoriteContainerList>
      </FavoriteContainer>

      <CharactersContainer>
        {filteredCharacters.length &&
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

        {!filteredCharacters.length && !loading && !error && (
          <FavoriteName>
            No characters found! Maybe trying in another dimension? 🍄
          </FavoriteName>
        )}
      </CharactersContainer>
    </section>
  );
};

export default Characters;
