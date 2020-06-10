import React from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import logo from './plantlogo.jpg';
import Display from './Display';
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
        <Route exact path='/SearchBar'>
          <SearchBar />
        </Route>
        <Route path='/Display'>
          <Display />
        </Route>
      </div>
    </div>
  );
}

export default App;
