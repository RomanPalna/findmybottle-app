import React, { useState } from 'react';
import shortid from 'shortid';

import Alcohol from './components/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown';
import AddList from './components/AddList';
import BottleList from './components/BottleList';
import whisky from './whisky.json';
import Modal from './components/Modal/Modal';
import IconButton from './components/IconButton/IconButton';
import Clock from './components/Clock';
import { ReactComponent as AddIcon } from './icons/addIcon.svg';

// const findMyBottle = (bottles, bottle) => {
//   bottles.find(
//     item => item.bottleName.toLowerCase() === bottle.bottleName.toLowerCase(),
//   );
// };

export default function App() {
  const [bottles, setBottles] = useState(whisky);
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [toggleModal, setToggleModal] = useState(false);

  //add bottles to BottleList
  const addBottle = bottleItems => {
    const bottle = bottleItems.map(item => ({
      ...item,
    }));

    setItems([...bottle, ...items]);
  };

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

  const onSubmitHendler = (bottleName, litr, price) => {
    const bottle = {
      id: shortid.generate(),
      name: bottleName,
      liters: litr,
      price,
    };
    setBottles([...bottles, bottle]);
    onToggleModal();
  };

  const onToggleModal = () => {
    setToggleModal(!toggleModal);
  };

  return (
    <>
      <IconButton onClick={onToggleModal}>
        <AddIcon width="40" heigth="40" fill="white" />
      </IconButton>

      <Dropdown>
        <Clock />
      </Dropdown>

      <Finder value={filter} onChange={findBottle} />

      <Alcohol items={showBottle()} addBottle={addBottle} />

      <BottleList items={items} onDelete={bottleRemove} />

      {toggleModal && (
        <Modal onClose={onToggleModal}>
          <>
            <AddList onSubmit={onSubmitHendler} />
            <IconButton onClick={onToggleModal}>Close</IconButton>
          </>
        </Modal>
      )}
    </>
  );
}
