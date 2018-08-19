import React from 'react';

const SearchBar = ({onSearchBarChange}) => (
    <input
      type="text"
      placeholder="search"
      onChange={(event) => onSearchBarChange(event.target.value)}
    />
);

export default SearchBar;
