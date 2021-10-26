// import IconButton from '../IconButton';
import Button from '@mui/material/Button';
import './bottleList.css';

export default function BottleList({ items, onDelete }) {
  const sumPrice = items.reduce((prev, { price }) => {
    return Number(prev) + Number(price);
  }, 0);
  const sumQuantity = items.reduce((prev, { quantity }) => {
    return Number(prev) + Number(quantity);
  }, 0);
  const sum = sumPrice * sumQuantity;

  return (
    <div>
      <p>Кількість найменувань: {items.length}</p>
      <p>Кількість пляшок: {sumQuantity}</p>
      <p>Загальна сума: {sum} грн</p>

      <ul className="bottlelist">
        {items.map(item => (
          <li key={item.id} className="bottlelist__item">
            <p>Name: {item.name}</p>
            <p>Litres: {item.liters} </p>
            <p>Price: {item.price} </p>
            <p>Quantity: {item.quantity} </p>
            <Button
              variant="contained"
              color="error"
              type="button"
              onClick={() => onDelete(item.id)}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
