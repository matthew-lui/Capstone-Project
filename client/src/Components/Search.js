import React from 'react';
import {Link} from "react-router-dom"

function Search({search, setSearch}) {

  function handleSubmit() {
    setSearch('');
  }

  // clear search bar after submit
  


    return (
        <div className="search-bar-container">
        <div>
        <div className='search-bar'>
        <input
        className="search-input-field"
          type="text"
          placeholder="Search restaurants by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Link to="/"> 
        <button onSubmit={handleSubmit} type="submit" className='fancy-button'>Search Restaurant</button>
            </Link>
        </div>
        </div>
        </div>
    );
}

export default Search;