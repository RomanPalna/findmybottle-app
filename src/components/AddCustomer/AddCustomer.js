import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import './customer.css';

export default function AddCustomer({ onSubmit }) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  const [table, setTable] = useState('');

  const handleChangeName = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const handleChangeSurname = e => {
    const { value } = e.currentTarget;
    setSurname(value);
  };

  const handleChangeDate = e => {
    const { value } = e.currentTarget;
    setDate(value);
  };

  const handleChangeTable = e => {
    const { value } = e.currentTarget;
    setTable(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, surname, date, table);
    setName('');
    setSurname('');
    setDate('');
    setTable('');
  };

  return (
    <form className="customer__form" onSubmit={handleSubmit}>
      <label className="customer__input">
        <TextField
          autoComplete="off"
          label="Ім'я"
          required={true}
          name="name"
          type="text"
          value={name}
          onChange={handleChangeName}
        ></TextField>
      </label>

      <label className="customer__input">
        <TextField
          autoComplete="off"
          name="surname"
          label="Фамілія"
          required={true}
          type="text"
          value={surname}
          onChange={handleChangeSurname}
        ></TextField>
      </label>

      <label className="customer__input">
        <TextField
          autoComplete="off"
          name="date"
          required={true}
          type="date"
          value={date}
          onChange={handleChangeDate}
        ></TextField>
      </label>

      <label className="customer__input">
        <TextField
          autoComplete="off"
          name="table"
          label="Стіл"
          required={true}
          type="text"
          value={table}
          onChange={handleChangeTable}
        ></TextField>
      </label>

      <Button type="submit">SUBMIT</Button>
    </form>
  );
}
