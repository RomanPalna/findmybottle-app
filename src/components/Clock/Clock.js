import { useState, useEffect, useRef } from 'react';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(() => new Date());

  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => setTime(new Date()), 1000);

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  return <div className="Clock__face">{time.toLocaleTimeString()}</div>;
};

export default Clock;
