import React from 'react';

const SearchBar = ({ onChange }) => (
  <div>
    <input
      type="text"
      placeholder="search"
      onChange={(event) => {
        onChange(event)
      }}
    />
  </div>
);

export default SearchBar;
