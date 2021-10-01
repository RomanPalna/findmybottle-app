import { useState } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleString());

  setInterval(() => setTime(new Date().toLocaleString()), 1000);

  return <div className="Clock__face">{time}</div>;
};

export default Clock;
