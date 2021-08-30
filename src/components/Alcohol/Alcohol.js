import './Alcohol.css';

export default function Alcohol({ items }) {
  return (
    <ul className="Alcohol__list">
      {items.map(({ id, name, liters, price }) => (
        <li key={id} className="Alcohol__item">
          <p className="Alcohol__discription">{name}</p>
          <p>Litres: {liters}</p>
          <p>Price: {price}</p>
          <form>
            <input type="number"></input>
            <button>Add to list</button>
          </form>
        </li>
      ))}
      ;
    </ul>
  );
}
