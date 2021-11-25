import AlcoholInput from '../AlcoholInput';
// import Button from '@mui/material/Button';
// import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

import './Alcohol.css';

export default function Alcohol({ items, addBottle, deleteBottle, percente }) {
  return (
    <ul className="alcohol__list">
      {items.map(({ id, name, liters, price }) => (
        <li key={id} className="alcohol__item">
          {/* <Button
            color="error"
            variant="contained"
            type="button"
            onClick={() => deleteBottle(id)}
          >
            <HighlightOffOutlinedIcon />
          </Button> */}

          <p className="alcohol__text">{name}</p>
          <p>{liters} л.</p>
          <p className="alcohol__price">
            {Math.round((price / 100) * percente + price)} грн.
          </p>

          <AlcoholInput onSubmit={addBottle} bottleId={id} />
        </li>
      ))}
    </ul>
  );
}
