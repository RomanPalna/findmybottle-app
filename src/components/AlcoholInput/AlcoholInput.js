import React, { useState } from 'react';

export default function AlcoholInput({ onSubmit, bottleId }) {
  const [quantity, setQuantity] = useState('');

  const handleChangeBottles = e => {
    setQuantity(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(quantity, bottleId);
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Кількість:
        <input
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
