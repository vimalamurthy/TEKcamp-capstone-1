import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import logo from './plantlogo.jpg';
import { Display, Cart } from './Display';
import Home from './Home';
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
        <Route path='/Home'>
          <Home />
        </Route>
        <Route exact path='/SearchBar'>
          <SearchBar />
        </Route>
        <Route exact path='/Display'>
          <Display />
        </Route>
        <Route exact path='/Cart'>
          <Cart />
        </Route>
      </div>
    </div>
  );
}

export default App;
