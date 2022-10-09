import React from "react";
import styled from "styled-components";

const FavoriteContainer = styled.div`
  border-radius: 10px;
  width: 70%;
  margin: 1.5rem auto;
  border: 1px solid #ff9800;
`;

const FavoriteOrigin = styled.p`
  color: #ffffff;
`;

const FavoriteImg = styled.img`
  margin-top: 8px;
  width: 30%;
  border-radius: 50%;
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

const FavoriteName = styled.p`
  font-size: 2.4rem;
  font-family: "Get Schwifty", sans-serif;
  color: #6cac6c;
`;

const ErrorMessage = styled.h3`
  font-family: sans-serif;
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

const Favorites = ({ favorites }) => {
  const { favoriteCharacters = favorites?.favorites } = favorites;

  return (
    <FavoriteContainer>
      <FavoriteContainerTitle>Favorite characters</FavoriteContainerTitle>
      <FavoriteContainerList>
        {favoriteCharacters?.length > 0 ? (
          favoriteCharacters.map((favorite) => (
            <FavoriteCard key={`Favorite-${favorite.name}`}>
              <FavoritePicture>
                <FavoriteImg src={favorite.image} alt={`${favorite.name}`} />
              </FavoritePicture>

              <FavoriteName>{favorite.name}</FavoriteName>
              <FavoriteOrigin>{favorite.origin.name}</FavoriteOrigin>
            </FavoriteCard>
          ))
        ) : (
          <ErrorMessage>No favorites yet 🌀</ErrorMessage>
        )}
      </FavoriteContainerList>
    </FavoriteContainer>
  );
};

export default Favorites;
