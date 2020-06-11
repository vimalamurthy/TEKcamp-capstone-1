import React, { useState } from 'react';
import data from './Data';
import logo from './search.png';
import './DisplayItems.css';

let items = [];

function SearchBar() {
  const [searchText, setsearchText] = useState('');

  /*Event handler to search for the item using filter method*/

  const handleSubmit = (e) => {
    e.preventDefault();
    setsearchText(e.target.value);
    items = data.Product.filter((data) =>
      data.Productname.toLowerCase().includes(searchText.toLowerCase())
    );
    {
      /* items = data.Product.filter((data) =>
      data.Category.toLowerCase().includes(searchText.toLowerCase())
   );*/
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img
          style={{ width: 25, height: 25 }}
          src={logo}
          alt='Search logo'
        ></img>
        <input
          style={{ width: 200, height: 20, padding: 20, borderRadius: 15 }}
          type='text'
          placeholder='Search.. '
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
      </form>

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
                  <img
                    style={{ width: 25, height: 25, borderRadius: 50 }}
                    src={product.Image}
                    alt='Product picture'
                  ></img>
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
