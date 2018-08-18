import React from 'react';

const SearchBar = ({ onSearchTerm }) => (
  <div>
    <input
      type="text"
      placeholder="search"
      onChange={onSearchTerm}
    />
  </div>
);

export default SearchBar;
