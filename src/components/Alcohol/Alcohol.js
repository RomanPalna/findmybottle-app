import AlcoholInput from '../AlcoholInput';
import Button from '@mui/material/Button';

import './Alcohol.css';

export default function Alcohol({ items, addBottle, deleteBottle }) {
  return (
    <ul className="Alcohol__list">
      {items.map(({ id, name, liters, price }) => (
        <li key={id} className="Alcohol__item">
          <Button
            color="error"
            variant="contained"
            type="button"
            onClick={() => deleteBottle(id)}
          >
            DELETE
          </Button>
          <p className="Alcohol__discription">{name}</p>
          <p>{liters} л.</p>
          <p>{price} грн.</p>
          <AlcoholInput onSubmit={addBottle} bottleId={id} />
        </li>
      ))}
    </ul>
  );
}
