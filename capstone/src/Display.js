import React, { useState } from 'react';
import data from './Data';
import './DisplayItems.css';

const selectedItems = [];

function Display() {
  const [items, setItems] = useState(data);

  function handleClick(e) {
    let findidx = selectedItems.findIndex(
      (tempObj) => tempObj.prod === e.target.value
    );
    if (findidx !== -1) {
      selectedItems[findidx].cnt = selectedItems[findidx].cnt + 1;
    } else {
      let pObj = {};
      pObj['prod'] = e.target.value;
      pObj['cnt'] = 1;
      selectedItems.push(pObj);
    }
    findidx = items.Product.findIndex(
      (tempObj) => tempObj.Productname === e.target.value
    );
    items.Product[findidx].Quantity = items.Product[findidx].Quantity - 1;
    var changedItems = {};
    changedItems['Product'] = items.Product.map((a) => {
      return { ...a };
    });
    setItems(changedItems);
    if (changedItems.Product[findidx].Quantity === 0) {
      e.target.disabled = true;
    }
  }
  return (
    <div className='display'>
      <div>
        <p className='para-head'>
          <span>Product</span>
          <span>Id No.</span>
          <span>Price </span>
          <span>Supplier</span>
          <span>Category</span>
          <span>Quantity</span>
        </p>
      </div>
      {/*Writing data from the json file in the output using map method */}
      {items.Product.map((product, i) => {
        return (
          <p id='para-head1' key={i}>
            <span>
              <img
                style={{ height: 50, width: 50, borderRadius: 50 }}
                src={product.Image}
              ></img>
            </span>
            <span>{product.Productname}</span>
            <span> {'    '}</span>
            <span> {product.Serialnumber} </span>
            <span>{'  '}</span>
            <span> {product.Price} </span>
            <span>{'  '}</span>
            <span> {product.Supplier} </span>
            <span>{'  '}</span>
            <span> {product.Category} </span>
            <span>{'      '}</span>
            <span> {product.Quantity} </span>
            <span>
              {/*Adding items to the cart by checking the count*/}
              <button
                type='button'
                style={{ fontSize: 15, borderRadius: 12 }}
                onClick={handleClick}
                value={product.Productname}
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

function Cart() {
  return (
    <div className='display'>
      <div>
        <p className='para-head'>
          <span>Product</span>
          <span>{'   '}</span>
          <span>Count</span>
        </p>
      </div>
      {selectedItems.map((product, i) => {
        return (
          <p id='para-head1' key={i}>
            <span>
              <img
                style={{ height: 50, width: 50, borderRadius: 50 }}
                src={product.Image}
              ></img>
            </span>
            <span>{product.prod}</span>
            <span>{'       '} </span>
            <span> {product.cnt} </span>
            <br />
          </p>
        );
      })}
    </div>
  );
}

export { Display, Cart };
