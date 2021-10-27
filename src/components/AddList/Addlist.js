import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './addList.css';

export default function AddList({ onSubmit }) {
  const [bottleName, setBottleName] = useState('');
  const [litr, setLitr] = useState('');
  const [price, setPrice] = useState('');

  const handleChangeBottleName = e => {
    const { value } = e.currentTarget;
    setBottleName(value);
  };

  const handleChangeLitres = e => {
    const { value } = e.currentTarget;
    setLitr(value);
  };

  const handleChangePrice = e => {
    const { value } = e.currentTarget;
    setPrice(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(bottleName, litr, price);
    setBottleName('');
    setLitr('');
    setPrice('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label className="form-label">
        <TextField
          autoComplete="off"
          label="Назва пляшки"
          required={true}
          name="name"
          type="text"
          value={bottleName}
          onChange={handleChangeBottleName}
        ></TextField>
      </label>

      <label className="form-label">
        <TextField
          name="litres"
          label="Літри"
          required={true}
          type="number"
          value={litr}
          onChange={handleChangeLitres}
        ></TextField>
      </label>

      <label className="form-label">
        <TextField
          name="price"
          label="Ціна"
          required={true}
          type="number"
          value={price}
          onChange={handleChangePrice}
        ></TextField>
      </label>
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}
