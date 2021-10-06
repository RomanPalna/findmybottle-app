import React, { useState } from 'react';
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';

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
        <IconButton type="submit">
          <AddIcon width="24" heigth="24" fill="white" />
        </IconButton>
      </label>
    </form>
  );
}
