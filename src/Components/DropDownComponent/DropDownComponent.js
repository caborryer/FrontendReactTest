import React from 'react';

const DropDownComponent = ({date, amount, spent}) => {
  return (
    <>
        <option>{date}</option>
        <option>{amount}</option>
        <option>{spent}</option>
    </>
  );
};

export default DropDownComponent;