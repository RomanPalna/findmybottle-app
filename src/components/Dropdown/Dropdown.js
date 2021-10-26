import React, { useState } from 'react';
import Button from '@mui/material/Button';

const Dropdown = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <Button type="button" onClick={toggle} color="success">
        {visible ? 'Hide' : 'Show'}
      </Button>

      {visible && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
