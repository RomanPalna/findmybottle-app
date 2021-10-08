import IconButton from '../IconButton';
import './bottleList.css';

export default function BottleList({ items, onDelete }) {
  const sum = items.reduce((prev, { price, quantity }) => {
    const allPrice = Number(prev) + Number(price);
    const allQuantity = Number(prev) + Number(quantity);
    const allSum = allPrice * allQuantity;
    return allSum;
  }, 0);

  return (
    <div>
      <p>Кількість найменувань: {items.length}</p>
      <p>Загальна сума: {sum}</p>
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
