import React from 'react';

import logo from './search.png';

function SearchBar() {
  return (
    <div>
      <img style={{ width: 25, height: 25 }} src={logo} alt='search logo'></img>
      <input
        style={{ width: 200, height: 20, padding: 20, borderRadius: 15 }}
        type='text'
        placeholder=''
      ></input>
      <button
        style={{ backgroundColor: 'white', fontSize: 22, borderRadius: 15 }}
        type='button'
      >
        Search
      </button>
      <div></div>
    </div>
  );
}

export default SearchBar;
