import React from 'react';

const SearchBar = ({ onChange, searchTerm }) => (
  <div>
    <input
      type="text"
      placeholder="search"
      onChange={ (event) => onChange(event) }
    />
    <p>value: {searchTerm}</p>
  </div>
);

export default SearchBar;
