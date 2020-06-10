import React from 'react';
import './Navigation.css';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <Link to='/Display'>
          <li>Display Items</li>
        </Link>
        <Link to='/SearchBar'>
          <li>Search</li>
        </Link>
        <li>Cart View</li>
      </ul>
    </nav>
  );
}

export default Navigation;
