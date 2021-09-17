import React, { useState } from 'react';
import whisky from '../../whisky.json';

export default function AlcoholInput({ items, onSubmit, bottleId }) {
  const [quantity, setQuantity] = useState('');
  const [bottles, setBottles] = useState([]);

  const handleChangeBottles = e => {
    setQuantity(e.currentTarget.value);
  };

  const bottlesArray = bottleId => {
    setBottles(whisky.filter(item => item.id === bottleId));
  };
  console.log(whisky[0].id);
  console.log(bottles);

  const handleSubmit = e => {
    e.preventDefault();

    if (quantity < 1) {
      return;
    } else {
      bottlesArray(bottleId);

      onSubmit([...bottles, items]);
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
