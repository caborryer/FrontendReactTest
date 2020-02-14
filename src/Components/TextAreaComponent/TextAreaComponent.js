import React from 'react';

const TextAreaComponent = ({onChange}) => {
  return (
    <>
      <div className="input-group">
        <div className="input-group-prepend">
        </div>
        <textarea onChange={onChange} name="csv" className="form-control" aria-label="With textarea"></textarea>
      </div>
      
    </>
  );
};

export default TextAreaComponent;