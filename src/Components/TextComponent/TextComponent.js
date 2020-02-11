import React, { useState } from 'react';

const TextComponent = () => {
  const [csv, setCsv] = useState('');

  const handleChange = e => {
    setCsv(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(csv)

  }

  return (
    <div className="container">
      <h1>Paste your cvs dates</h1>
      <div className="principalContend contend">
        <form>
          <div className="input-group">
            <div className="input-group-prepend">
            </div>
            <textarea onChange={handleChange} name="csv" className="form-control" aria-label="With textarea"></textarea>
          </div>
          <br/>

          <button onClick={handleSubmit} type="button" className="btn btn-primary">Process</button>
        </form>
      </div>
    </div>
  );
};

export default TextComponent;

