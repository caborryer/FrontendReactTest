import React from 'react';

const OptionComponent = ({ amount, spent, date }) => {
  return (
    <>
      <option>Y AXIS</option>
      <option>{date}</option>
      <option>{spent}</option>
      <option>{amount}</option>
    </>
  );
};

export default OptionComponent;