import React, { useState } from 'react';

const Dropdown = ({ children }) => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button type="button" onClick={toggle}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible && <div>{children}</div>}
    </div>
  );
};

export default Dropdown;
