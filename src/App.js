import React, { useState } from 'react';

import Alcohol from './components/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown';
import AddList from './components/AddList';
import whisky from './whisky.json';

export default function App() {
  const [bottles, setBottle] = useState(whisky);
  const [filter, setFilter] = useState('');

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
    console.log(bottleName);
    console.log(litr);
    console.log(price);
  };

  return (
    <div>
      <Dropdown />
      <Finder value={filter} onChange={findBottle} />
      <Alcohol items={showBottle()} />
      <AddList onSubmit={onSubmitHendler} />
    </div>
  );
}
