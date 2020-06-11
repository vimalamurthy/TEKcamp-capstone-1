import React, { useState, useEffect } from 'react';
import data from './Data';
import './DisplayItems.css';

const selectedItems = [];

function Display() {
  const [items, setItems] = useState(data);

  /* Event handler to get the target value and search for it in the array and adds it to the cart view
    Using temporary variables PIidx - all product index, sIidx - index for selected item*/

  function handleClick(e) {
    let sIidx = selectedItems.findIndex((obj) => obj.prod === e.target.value);

    let pIidx = items.Product.findIndex(
      (obj) => obj.Productname === e.target.value
    );
    items.Product[pIidx].Quantity = items.Product[pIidx].Quantity - 1;
    {
      /*Setting the count and evaluating price, if already exists add else set new one */
    }
    if (sIidx !== -1) {
      selectedItems[sIidx].cnt = selectedItems[sIidx].cnt + 1;
      selectedItems[sIidx].rate =
        selectedItems[sIidx].rate + items.Product[pIidx].Price;
    } else {
      var pObj = {};
      pObj['prod'] = e.target.value;
      pObj['cnt'] = 1;
      pObj['rate'] = items.Product[pIidx].Price;
      selectedItems.push(pObj);
    }

    /*Createa a new object for setting state*/

    var changedItems = {};
    changedItems['Product'] = items.Product.map((a) => {
      return { ...a };
    });
    setItems(changedItems);

    /* Disabling the button if the quantity is zero */
    if (changedItems.Product[pIidx].Quantity === 0) {
      e.target.disabled = true;
    }
    console.log(items);
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
      {/*Writing data from the json file in the output using map method and display items */}
      {items.Product.map((product, i) => {
        return (
          <p id='para-head1' key={i}>
            <span>
              <img
                style={{ height: 50, width: 50, borderRadius: 50 }}
                src={product.Image}
                alt='Image picture'
              ></img>
            </span>
            <span>{product.Productname}</span>
            <span> {'   '}</span>
            <span>{'  '}</span>
            <span>{'  '}</span>
            <span> {product.Serialnumber} </span>
            <span>{'  '}</span>
            <span>{'  '}</span>
            <span>$ {product.Price}</span>
            <span>{'  '}</span>
            <span>{'  '}</span>
            <span> {product.Supplier} </span>
            <span>{'  '}</span>
            <span>{'  '}</span>
            <span> {product.Category} </span>
            <span>{'  '}</span>
            <span>{'  '}</span>
            <span> {product.Quantity} </span>
            <span>{'      '}</span>
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
  const [sItems, setsItems] = useState(selectedItems);
  const [total, setTotal] = useState(0);
  let GTotal = 0;
  {
    /* Adding the price of the products to display the final total */
  }
  useEffect(() => {
    sItems.map((sItem, i) => {
      GTotal = GTotal + sItem.rate;
    });
    setTotal(GTotal);
    console.log(GTotal);
  });
  {
    /* Display the details of the product selected */
  }
  return (
    <div className='display'>
      <div>
        <p className='para-head'>
          <span>Product</span>
          <span>{'   '}</span>
          <span>{'       '} </span>
          <span>Price</span>
          <span>{'       '} </span>
          <span>Quantity</span>
          <span>{'   '}</span>
          <span>Total</span>
        </p>
      </div>
      {sItems.map((product, i) => {
        return (
          <p id='para-head1' key={i}>
            <span>
              <img
                style={{ height: 50, width: 50, borderRadius: 50 }}
                src={data.Product[i].Image}
              ></img>
            </span>
            <span>{data.Product[i].Productname}</span>
            <span>{'    '} </span>
            <span>${data.Product[i].Price}</span>
            <span>{'    '} </span>
            <span> {product.cnt} </span>
            <span>{'    '} </span>
            <span>${product.rate}</span>
            <br />
          </p>
        );
      })}
      <div>
        <span>Grand total: $ </span>
        <span>{total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export { Display, Cart };
