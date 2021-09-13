import AlcoholInput from '../AlcoholInput';
import './Alcohol.css';

export default function Alcohol({ items, onSubmit }) {
  return (
    <ul className="Alcohol__list">
      {items.map(({ id, name, liters, price }) => (
        <li key={id} className="Alcohol__item">
          <p className="Alcohol__discription">{name}</p>
          <p>Litres: {liters}</p>
          <p>Price: {price}</p>
          <AlcoholInput onSubmit={onSubmit} items={items} bottleId={id} />
        </li>
      ))}
    </ul>
  );
}
