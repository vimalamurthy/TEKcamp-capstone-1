import React, { useState } from 'react';
import data from './Data';

function Display1() {
  const [items, setItems] = useState(data);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.Price}</li>
        ))}
      </ul>
    </div>
  );
}

export default Display1;
