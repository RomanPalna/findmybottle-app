import React, { useState } from 'react';
import './Alcohol.css';
import shotrid from 'shortid';

export default function Alcohol({ items, onSubmit }) {
  const [quantity, setQuantity] = useState('');

  const handleChangeBottles = e => {
    e.preventDefault();
    setQuantity(e.target.value);
    console.log(e.target);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { id, name, liters, price } = items;
    if (quantity < 1) {
      return;
    } else {
      onSubmit({ id, name, liters, price, quantity });
    }

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
            <label htmlFor={id}>
              Кількість:
              <input
                id={id}
                name="number"
                type="number"
                value={quantity}
                onChange={handleChangeBottles}
                className="Alcohol__input"
              ></input>
              <button type="submit">Add to list</button>
            </label>
          </form>
        </li>
      ))}
    </ul>
  );
}
