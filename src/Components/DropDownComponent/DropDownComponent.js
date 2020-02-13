import React from 'react';

const OptionComponent = ({ optionText, name}) => {
  return (
    <>
        <option>{optionText}</option>
      <option>{name}</option>
    </>
  );
};

export default OptionComponent;