import { useState } from 'react';
import IconButton from '../IconButton';
import { ReactComponent as AddIcon } from '../../icons/addIcon.svg';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import Modal from '../Modal';
import Button from '@mui/material/Button';
import AddCustomer from '../AddCustomer';
import './bottleList.css';
import { toast } from 'react-toastify';

export default function BottleList({ items, onDelete, percente }) {
  const [toggleModal, setToggleModal] = useState(false);
  const [customer, setCustomer] = useState({});

  // const sumPrice = items.reduce((prev, { price }) => {
  //   const sum = Number(prev) + Number(price);

  //   const extraCharge = (sum / 100) * percente + sum;
  //   console.log(extraCharge);
  //   return extraCharge;
  // }, 0);

  const sumTotal = arr =>
    items.reduce((sum, { price, quantity }) => sum + price * quantity, 0);

  const total = sumTotal(items);

  const sumQuantity = items.reduce((prev, { quantity }) => {
    return Number(prev) + Number(quantity);
  }, 0);

  const onToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  const onSubmitHendler = (name, surname, date, table) => {
    const addCustomer = {
      name,
      surname,
      date,
      table,
    };
    setCustomer(addCustomer);
    onToggleModal();
    toast.success('Замовник доданий!');
  };

  return (
    <div>
      <div className="bottleList__head">
        <ul>
          <li>
            Замовник: {customer.name || 'Введіть ім`я та фамілію'}{' '}
            {customer.surname}
          </li>
          <li>Дата: {customer.date || 'Введіть дату'} </li>
          <li>Номер стола: {customer.table || 'Введіть стіл'} </li>
          <li>Кількість найменувань: {items.length}</li>
          <li>Кількість пляшок: {sumQuantity}</li>
          <li>
            Загальна сума: {Math.round((total / 100) * percente + total)} грн
          </li>
        </ul>

        <div className="bottleList__add">
          <p>Додати замовника</p>
          <IconButton onClick={onToggleModal}>
            <AddIcon width="40" heigth="40" fill="white" />
          </IconButton>
        </div>
      </div>

      {toggleModal && (
        <Modal onClose={onToggleModal}>
          <>
            <AddCustomer onSubmit={onSubmitHendler} />
            <IconButton onClick={onToggleModal}>Close</IconButton>
          </>
        </Modal>
      )}

      <ul className="bottlelist">
        {items.map(({ id, name, liters, price, quantity }) => (
          <li key={id} className="bottlelist__item">
            <p className="bottlelist__name">{name}</p>
            <p className="bottlelist__litres"> {liters} л. </p>
            <p className="bottlelist__price">
              {' '}
              {Math.round((price / 100) * percente + price)} грн.{' '}
            </p>
            <p className="bottlelist__quantity"> {quantity} бут.</p>
            <Button
              variant="contained"
              color="error"
              type="button"
              onClick={() => onDelete(id)}
            >
              <HighlightOffOutlinedIcon />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
