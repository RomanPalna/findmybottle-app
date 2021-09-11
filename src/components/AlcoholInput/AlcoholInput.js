import React, { useState } from 'react';

export default function AlcoholInput({ items, onSubmit }) {
  const [quantity, setQuantity] = useState('');

  const handleChangeBottles = e => {
    setQuantity(e.currentTarget.value);
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
    <form onSubmit={handleSubmit}>
      <label htmlFor={items.id}>
        Кількість:
        <input
          id={items.id}
          name="number"
          type="number"
          value={quantity}
          onChange={handleChangeBottles}
          className="Alcohol__input"
        ></input>
        <button type="submit">Add to list</button>
      </label>
    </form>
  );
}
