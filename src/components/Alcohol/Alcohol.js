import { useState, useEffect } from 'react';
import AlcoholInput from '../AlcoholInput';
import whisky from '../../whisky.json';
import './Alcohol.css';

export default function Alcohol() {
  const [bottles, setBottles] = useState([]);

  const addBottle = (quantity, bottleId) => {
    const changedBottle = whisky.find(item => item.id === bottleId);

    changedBottle.quantity = quantity;

    setBottles([changedBottle, ...bottles]);
  };

  useEffect(() => {
    window.localStorage.setItem('bottles', JSON.stringify(bottles));
  }, [bottles]);

  console.log(bottles);

  return (
    <ul className="Alcohol__list">
      {whisky.map(({ id, name, liters, price }) => (
        <li key={id} className="Alcohol__item">
          <p className="Alcohol__discription">{name}</p>
          <p>Litres: {liters}</p>
          <p>Price: {price}</p>
          <AlcoholInput onSubmit={addBottle} bottleId={id} />
        </li>
      ))}
    </ul>
  );
}
