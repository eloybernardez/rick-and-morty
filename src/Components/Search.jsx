import React from "react";
import styled from "styled-components";

const SearchInput = styled.input`
  width: 50%;
  margin: 0 auto;
  padding: 1rem;
  text-align: center;
  border: 1px solid black;

  &:focus {
    outline-color: #ff9800;
  }
`;

const SearchBar = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <SearchBar>
      <SearchInput
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Search for a character"
      />
    </SearchBar>
  );
};

export default Search;
