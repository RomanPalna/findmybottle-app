import React, { useState } from 'react';

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

  const nandleSubmit = e => {
    e.preventDefault();
    onSubmit(bottleName, litr, price);
    setBottleName('');
    setLitr('');
    setPrice('');
  };

  return (
    <form onSubmit={nandleSubmit}>
      <label>
        Bottle Name
        <input
          name="name"
          type="text"
          value={bottleName}
          onChange={handleChangeBottleName}
        ></input>
      </label>

      <label>
        litres
        <input
          name="litres"
          type="number"
          value={litr}
          onChange={handleChangeLitres}
        ></input>
      </label>

      <label>
        Price
        <input
          name="price"
          type="number"
          value={price}
          onChange={handleChangePrice}
        ></input>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
