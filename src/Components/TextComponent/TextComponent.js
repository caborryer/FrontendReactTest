import React, { useState } from 'react';
import Papa from 'papaparse';


const TextComponent = () => {
  const [csv, setCsv] = useState('');
  const [process, setProcess] = useState([]);

  const handleChange = e => {
    setCsv(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    const change = Papa.parse(csv,{header:true})
    console.log(change.data)
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

