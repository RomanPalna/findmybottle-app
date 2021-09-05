import React, { useState } from 'react';
import './Alcohol.css';

export default function Alcohol({ items, onSubmit }) {
  const [quantity, setQuantity] = useState('');

  const handleChangeBottles = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(quantity);
    setQuantity('');
  };

  return (
    <ul className="Alcohol__list">
      {items.map(({ id, name, liters, price }) => (
        <li key={id} className="Alcohol__item">
          <p className="Alcohol__discription">{name}</p>
          <p>Litres: {liters}</p>
          <p>Price: {price}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              value={quantity}
              onChange={handleChangeBottles}
              className="Alcohol__input"
            ></input>
            <button type="submit">Add to list</button>
          </form>
        </li>
      ))}
    </ul>
  );
}
