import AlcoholInput from '../AlcoholInput';

import './Alcohol.css';

export default function Alcohol({ items, addBottle, deleteBottle }) {
  return (
    <ul className="Alcohol__list">
      {items.map(({ id, name, liters, price }) => (
        <li key={id} className="Alcohol__item">
          <button type="button" onClick={() => deleteBottle(id)}>
            DELETE
          </button>
          <p className="Alcohol__discription">{name}</p>
          <p>Litres: {liters}</p>
          <p>Price: {price}</p>
          <AlcoholInput onSubmit={addBottle} bottleId={id} />
        </li>
      ))}
    </ul>
  );
}
