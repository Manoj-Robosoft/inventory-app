import React, { useState } from "react";

import "./Search.css";
import searchIcon from "./Search.png";
import clearIcon from "./clear.PNG";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {

  }

  return (
    <div className="search__container">
      <div className="search__input">
        <img src={searchIcon} alt="search" />
        <input
          type="text"
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="Search by Item Name, SKU id…"
        />
        <img className="search__clear" src={clearIcon} alt="clear search" />
      </div>
      <div className="search__button">
        <button onClick={handleSearchClick}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
