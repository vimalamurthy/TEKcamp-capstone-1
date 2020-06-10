import React from 'react';

function ItemCard(props) {
  return (
    <div>
      <p className='para-head' key={props.index}>
        <span>
          {' '}
          <img src={props.Image}></img>
        </span>
        <span>{props.Productname}</span>
        <span> {props.Serialnumber} </span>
        <span> {props.Price} </span>
        <span> {props.Supplier} </span>
        <span> {props.Category} </span>
        <span> {props.Quantity} </span>
        <span>
          <button type='button' style={{ fontSize: 15, borderRadius: 12 }}>
            Add To Cart{' '}
          </button>
        </span>
        <br />
      </p>
    </div>
  );
}

export default ItemCard;
