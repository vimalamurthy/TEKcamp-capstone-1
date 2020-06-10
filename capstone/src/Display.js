import React, { useState } from 'react';
import data from './Data';
import './DisplayItems.css';

function Display() {
  const [count, setCount] = useState(0);
  const selectedItems = [];

  return (
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
      {data.Product.map((product, i) => {
        return (
          <p className='para-head' key={i}>
            <span>
              <img
                style={{ height: 50, width: 50, borderRadius: 50 }}
                src={product.Image}
              ></img>
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
                onClick={() => {
                  var findidx = selectedItems.findIndex(
                    (obj) => obj.prod === product.Productname
                  );
                  if (findidx !== -1) {
                    selectedItems[findidx].cnt = selectedItems[findidx].cnt + 1;
                    console.log(selectedItems);
                  } else {
                    var pObj = {};
                    pObj['prod'] = product.Productname;
                    pObj['cnt'] = 1;
                    selectedItems.push(pObj);
                    console.log(selectedItems);
                  }
                  console.log(product.Quantity);
                  product.Quantity = product.Quantity - 1;
                  console.log(product.Quantity);
                }}
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

export default Display;
