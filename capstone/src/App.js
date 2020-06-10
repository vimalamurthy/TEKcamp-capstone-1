import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import logo from './plantlogo.jpg';
import { Display, Cart } from './Display';
import Display1 from './Display1';
import Navigation from './Navigation';
import SearchBar from './SearchBar';

function App() {
  return (
    <div className='App'>
      <header className='header'>
        <img className='image' src={logo} alt='Plant shop'></img>
        <h1>The One-stop Plant shop</h1>
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
