import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import logo from './plantlogo.jpg';
import { Display, Cart } from './Display';

import Navigation from './Navigation';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <img className='image' src={logo} alt='Plant shop'></img>
        <h1>V's Plant Shop</h1>
        <h3>The One-stop Plant shop</h3>
      </header>
      <div>
        <Navigation />
        <Route path='/SearchBar'>
          <SearchBar />
        </Route>
        <Route path='/Display'>
          <Display />
        </Route>
        <Route path='/Cart'>
          <Cart />
        </Route>
      </div>
    </div>
  );
}

export default App;
