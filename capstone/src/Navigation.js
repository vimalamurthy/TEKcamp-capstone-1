import React from 'react';
import './Navigation.css';

import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <Link to='/Home'>
          <li>Home</li>
        </Link>
        <Link to='/Display'>
          <li>Display Items</li>
        </Link>
        <Link to='/SearchBar'>
          <li>Search</li>
        </Link>
        <Link to='/Cart'>
          <li>Cart View</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
