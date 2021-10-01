import React, { useState } from 'react';

const Dropdown = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button type="button" onClick={toggle}>
        {visible ? 'Hide' : 'Show'}
      </button>

      {visible && <div>Dropdown menu</div>}
    </div>
  );
};

export default Dropdown;
