import IconButton from '../IconButton';
import { ReactComponent as DeleteIcon } from '../../icons/deleteIcon.svg';
import './bottleList.css';

export default function BottleList({ items, onDelete }) {
  return (
    <div>
      <p>Кількість найменувань: {items.length}</p>
      <ul className="bottlelist">
        {items.map(item => (
          <li key={item.id} className="bottlelist__item">
            <p>Name: {item.name}</p>
            <p>Litres: {item.liters} </p>
            <p>Price: {item.price} </p>
            <p>Quantity: {item.quantity} </p>
            <IconButton type="button" onClick={() => onDelete(item.id)}>
              <DeleteIcon width="30" heigth="30" fill="white" />
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
