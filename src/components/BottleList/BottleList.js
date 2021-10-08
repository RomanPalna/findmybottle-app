import IconButton from '../IconButton';
import './bottleList.css';

export default function BottleList({ items, onDelete }) {
  const sumPrice = items.reduce((prev, { price }) => {
    return Number(prev) + Number(price);
  }, 0);
  const sumQuantity = items.reduce((prev, { quantity }) => {
    return Number(prev) + Number(quantity);
  }, 0);

  console.log(sumPrice, sumQuantity);

  const sum = sumPrice * sumQuantity;

  return (
    <div>
      <p>Кількість найменувань: {items.length}</p>
      <p>Загальна сума: {sum} грн</p>
      <ul className="bottlelist">
        {items.map(item => (
          <li key={item.id} className="bottlelist__item">
            <p>Name: {item.name}</p>
            <p>Litres: {item.liters} </p>
            <p>Price: {item.price} </p>
            <p>Quantity: {item.quantity} </p>
            <IconButton type="button" onClick={() => onDelete(item.id)}>
              Remove
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
