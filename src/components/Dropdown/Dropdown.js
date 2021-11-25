import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './dropdown.css';

const Dropdown = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div className="dropdown">
      <Button type="button" onClick={toggle} color="success">
        {visible ? 'Hide' : 'Show'}
      </Button>

      {visible && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
