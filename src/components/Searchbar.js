import React from 'react';
import '../App.css';
import search from '../imgs/search.ico';

function Searchbar(props) {

  function handleSearchClick() {
    document.getElementById("search").classList.add(".search-input-active");
  }

  function onInputChange(e) {
    props.onInputChange(e.target.value);
  }

  return (
      <div className="searchbar">
          <img onClick={handleSearchClick} src={search} alt="search" className="search-icon" />
          <input id="search" className="search-input" type="search" onChange={(e) => onInputChange(e)} placeholder="Type a movie" value={props.inputValue}/>
      </div>
  );
}

export default Searchbar;
