import React, { useState } from 'react';
import data from './Data';
import './DisplayItems.css';

function DisplayItems() {
  const selectedItems = [];

  return (
    <div className='display'>
      <p className='para-head'>
        <span>Product</span>
        <span>Id No.</span>
        <span>Price </span>
        <span>Supplier</span>
        <span>Category</span>
        <span>Quantity</span>
      </p>

      {data.Product.map((product, i) => {
        return (
          <p className='para-head1' key={i}>
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
            <span>
              <button
                type='button'
                style={{ fontSize: 15, borderRadius: 12 }}
                onClick={selectedItems.push(product.Productname)}
              >
                Add To Cart{' '}
              </button>
            </span>
            <br />
          </p>
        );
      })}
    </div>
  );
}

export default DisplayItems;
