import React, { useState } from 'react';
import {
  Table,
  Button,
  Input,
  InputGroup,
  FormControl,
  FormGroup,
  ControlLabel,
} from 'react-bootstrap';
import data from './Data';
import './DisplayItems.css';

function DisplayItems() {
  const [quantity, setQuantity] = useState('');

  handleChange = (event) => setQuantity(event.target.value);
  return (
    <div className='display'>
      <Table className='mt-4' striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Product Name </th>
            <th>Serial Number</th>
            <th> Price </th>
            <th>Supplier</th>
            <th> Category</th>
            <th> Quantity</th>
          </tr>
        </thead>
        <tbody>
          {data.Product.map((product, i) => {
            return (
              <tr key={i}>
                <td> {product.Productname} </td>
                <td> {product.Serialnumber} </td>
                <td> {product.Price} </td>
                <td> {product.Supplier} </td>
                <td> {product.Category} </td>
                <td> {product.Quantity} </td>
                <td>
                  <form>
                    <FormGroup controlId='quantity' bsSize='large'>
                      <FormControl
                        type='Number'
                        value={quantity}
                        onChange={handleChange}
                      />
                      <ControlLabel>Add</ControlLabel>
                    </FormGroup>
                  </form>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default DisplayItems;
