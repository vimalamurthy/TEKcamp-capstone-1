import React, { useState } from 'react';
import data from './Data';
import logo from './search.png';
import './DisplayItems.css';

let items = [];

function SearchBar() {
  const [searchText, setsearchText] = useState('');

  function handleClick() {
    items = data.Product.filter((data) =>
      data.Productname.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log({ items });
  }
  return (
    <div>
      <img style={{ width: 25, height: 25 }} src={logo} alt='search logo'></img>
      <input
        style={{ width: 200, height: 20, padding: 20, borderRadius: 15 }}
        type='text'
        placeholder='Search.. '
        onChange={(e) => setsearchText(e.target.value)}
      ></input>
      <button
        style={{ backgroundColor: 'white', fontSize: 22, borderRadius: 15 }}
        type='button'
        onClick={handleClick}
      >
        Search
      </button>
      <div>
        <div className='display'>
          <div>
            <p className='para-head'>
              <span></span>
              <span>Product</span>
              <span>Id No.</span>
              <span>Price </span>
              <span>Supplier</span>
              <span>Category</span>
              <span>Quantity</span>
            </p>
          </div>
          {items.map((product, i) => {
            return (
              <p className='para-head' key={i}>
                <span>
                  {' '}
                  <img src={product.Image}></img>
                </span>
                <span>{product.Productname}</span>
                <span> {product.Serialnumber} </span>
                <span> {product.Price} </span>
                <span> {product.Supplier} </span>
                <span> {product.Category} </span>
                <span> {product.Quantity} </span>
                <br />
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
