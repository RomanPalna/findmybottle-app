import React, { useState } from 'react';
import shortid from 'shortid';

import Alcohol from './components/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown';
import AddList from './components/AddList';
import BottleList from './components/BottleList';
import whisky from './whisky.json';

// const findMyBottle = (bottles, bottle) => {
//   bottles.find(
//     item => item.bottleName.toLowerCase() === bottle.bottleName.toLowerCase(),
//   );
// };

export default function App() {
  const [bottles, setBottles] = useState(whisky);
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);

  //add bottles to BotleList
  const addBottle = items => {
    const bottle = items.map(item => ({
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
  };

  return (
    <div>
      <Dropdown />
      <Finder value={filter} onChange={findBottle} />
      <Alcohol items={showBottle()} addBottle={addBottle} />
      <AddList onSubmit={onSubmitHendler} />
      <BottleList items={items} onDelete={bottleRemove} />
    </div>
  );
}
