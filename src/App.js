import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/';
import shortid from 'shortid';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as serviceAPI from './api-service/api-service';

import Alcohol from './components/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown';
import AddList from './components/AddList';
import BottleList from './components/BottleList';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import Clock from './components/Clock';
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import Container from './components/Container';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import Percentage from './components/Percentage';

export default function App() {
  const [bottles, setBottles] = useState([]);
  const [filter, setFilter] = useState('');
  const [toggleModal, setToggleModal] = useState(false);
  const [listBottle, setListBottle] = useState([]);
  const [percentage, setPercentage] = useState(0);

  //adding bottles to BottleList
  const addBottle = (quantity, bottleId) => {
    if (quantity <= 0) {
      return toast.error('🦄 Введіть кількість!!!');
    }

    const existingBottle = listBottle.find(bottle => bottle.id === bottleId);
    if (existingBottle) {
      existingBottle.quantity =
        Number(quantity) + Number(existingBottle.quantity);
      setListBottle([...listBottle].sort());
      toast.success('Кількість оновлено!');
    } else {
      const changedBottle = bottles.find(item => item.id === bottleId);
      changedBottle.quantity = quantity;

      setListBottle([changedBottle, ...listBottle].sort());
      toast.success('Додано до замовлення!');
    }
  };

  //fetch
  useEffect(() => {
    serviceAPI.apiService().then(bottles => setBottles(bottles));
  }, []);

  //remove from BottleList
  const bottleRemove = bottleId => {
    setListBottle(listBottle.filter(item => item.id !== bottleId));
  };

  //remove from Alcohol
  const removeBottle = id => {
    serviceAPI.apiServiceDelete(id);
  };

  //For Finder, filter
  const findBottle = e => {
    setFilter(e.currentTarget.value);
  };

  //For Alcohol,when searching
  const showBottle = () => {
    const normalizeName = filter.toLowerCase();

    return bottles
      ? bottles.filter(bottle =>
          bottle.name.toLowerCase().includes(normalizeName),
        )
      : console.log('Loading');
  };

  const onSubmitHendler = (bottleName, litr, price, quantity = 0) => {
    const bottle = {
      id: shortid.generate(),
      name: bottleName,
      liters: litr,
      price,
      quantity,
    };
    serviceAPI.apiServisePost(bottle);

    onToggleModal();
  };

  const onSubmitPercente = percente => {
    setPercentage(percente);
  };

  const onToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <div className="container">
      <Navigation />
      <hr />

      <Switch>
        <Route path="/" exact>
          <Clock />
        </Route>

        <Route path="/price">
          <Container>
            <IconButton onClick={onToggleModal}>
              <AddCircleOutlineOutlinedIcon fontSize="large" color="white" />
            </IconButton>

            <Dropdown>
              <Percentage onSubmit={onSubmitPercente} />
            </Dropdown>

            <Finder value={filter} onChange={findBottle} />
          </Container>

          <Alcohol
            items={showBottle()}
            addBottle={addBottle}
            deleteBottle={removeBottle}
            percente={percentage}
          />
        </Route>

        <Route path="/order">
          <BottleList
            items={listBottle}
            onDelete={bottleRemove}
            percente={percentage}
          />
        </Route>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>

      {toggleModal && (
        <Modal onClose={onToggleModal}>
          <>
            <AddList onSubmit={onSubmitHendler} />
            <IconButton onClick={onToggleModal}>Close</IconButton>
          </>
        </Modal>
      )}
      <ToastContainer autoClose={3000} />
      <ToastContainer />
    </div>
  );
}
