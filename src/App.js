import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/';
import shortid from 'shortid';
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import apiService from './api-service/api-service';

import Alcohol from './components/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown';
import AddList from './components/AddList';
import BottleList from './components/BottleList';
import whisky from './whisky.json';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import Clock from './components/Clock';
import Navigation from './components/Navigation';
import PageNotFound from './components/PageNotFound';
import { ReactComponent as AddIcon } from './icons/addIcon.svg';

// const findMyBottle = (bottles, bottle) => {
//   bottles.find(
//     item => item.bottleName.toLowerCase() === bottle.bottleName.toLowerCase(),
//   );
// };

import axios from 'axios';

const BASE_URL = 'http://localhost:4040/alcohol';

export default function App() {
  const [bottles, setBottles] = useState(whisky);
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);
  const [listBottle, setListBottle] = useState([]);
  const [some, setSome] = useState(null);

  //additing bottles to BottleList

  const addBottle = (quantity, bottleId) => {
    if (quantity <= 0) {
      return toast.error('🦄 Введіть кількість!!!');
    }

    const existingBottle = listBottle.find(bottle => bottle.id === bottleId);
    if (existingBottle) {
      existingBottle.quantity =
        Number(quantity) + Number(existingBottle.quantity);
      setListBottle([...listBottle].sort());
    } else {
      const changedBottle = whisky.find(item => item.id === bottleId);
      changedBottle.quantity = quantity;

      setListBottle([changedBottle, ...listBottle].sort());
    }
  };

  useEffect(() => {
    apiService.then(setSome);
  }, []);
  console.log(some);

  useEffect(() => {
    window.localStorage.setItem('bottles', JSON.stringify(listBottle));
  }, [listBottle]);

  useEffect(() => {
    setItems(JSON.parse(window.localStorage.getItem('bottles')));
  }, [listBottle]);

  //remove
  const bottleRemove = bottleId => {
    setItems(items.filter(item => item.id !== bottleId));
  };

  //For Finder, filter
  const findBottle = e => {
    setFilter(e.currentTarget.value);
  };

  //For Alcohol,when searching
  const showBottle = () => {
    const normalizeName = filter.toLowerCase();

    return bottles.filter(bottle =>
      bottle.name.toLowerCase().includes(normalizeName),
    );
  };

  const onSubmitHendler = (bottleName, litr, price, quantity = 0) => {
    const bottle = {
      id: shortid.generate(),
      name: bottleName,
      liters: litr,
      price,
      quantity,
    };
    setBottles([...bottles, bottle]);
    onToggleModal();
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
          <IconButton onClick={onToggleModal}>
            <AddIcon width="40" heigth="40" fill="white" />
          </IconButton>

          <Dropdown>
            <Clock />
          </Dropdown>

          <Finder value={filter} onChange={findBottle} />

          <Alcohol items={showBottle()} addBottle={addBottle} />
        </Route>

        <Route path="/order">
          <BottleList items={items} onDelete={bottleRemove} />
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
}
