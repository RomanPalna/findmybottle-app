import React, { useState } from 'react';

import Alcohol from './components/Alcohol';
import Finder from './components/Finder/Finder';
import Dropdown from './components/Dropdown';
import whisky from './whisky.json';

export default function App() {
  const [bottles, setBottle] = useState(whisky);
  const [filter, setFilter] = useState('');

  const findBottle = e => {
    setFilter(e.currentTarget.value);
  };

  const showBottle = () => {
    const normalizeName = filter.toLowerCase();

    return bottles.filter(bottle =>
      bottle.name.toLowerCase().includes(normalizeName),
    );
  };

  return (
    <div>
      <Dropdown />
      <Finder value={filter} onChange={findBottle} />
      <Alcohol items={showBottle()} />
    </div>
  );
}
