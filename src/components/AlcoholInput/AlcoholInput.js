import React, { useState } from 'react';
import IconButton from '../IconButton';
import { TextField } from '@mui/material';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';
import './input.css';

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
        <TextField
          name="number"
          type="number"
          value={quantity}
          onChange={handleChangeBottles}
          className="alcohol__input"
        ></TextField>
        <IconButton type="submit">
          <AddIcon width="24" heigth="24" fill="white" />
        </IconButton>
      </label>
    </form>
  );
}
