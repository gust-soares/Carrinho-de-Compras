import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchBar.css';

function SearchBar() {

  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="search-bar">
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar produtos"
        className="search__input"
        onChange = { ({target}) => setSearchValue(target.value) }
        required
      />
      { searchValue }

      <button type="submit" className="search__button">
        <FaSearch />
      </button>
    </form>
  );
}

export default SearchBar;
