import React from "react";
import styled from "styled-components";

const StyledSearch = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <StyledSearch>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
        placeholder="Search for a character"
      />
    </StyledSearch>
  );
};

export default Search;
