import React from 'react';

const SearchBar = ({onSearchBarChange}) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="search"
        onChange={(event) => onSearchBarChange(event.target.value)}
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
