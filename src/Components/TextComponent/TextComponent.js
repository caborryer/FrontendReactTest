import React, { useState } from 'react';
import Papa from 'papaparse';
import DropDownComponent from '../DropDownComponent/DropDownComponent';


const TextComponent = () => {
  const [csv, setCsv] = useState('');
  const [process, setProcess] = useState([]);

  const handleChange = e => {
    setCsv(e.target.value)
  }

  const config = {
    delimiter: ",", header: true, dynamicTyping: true, transformHeader: function (h) {
      return h.trim();
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    const change = Papa.parse(csv, config)
    setProcess(change.data)
  }

  return (
    <div className="container">
      <h1>Paste your cvs dates</h1>
      <div className="principalContend contend">
        <div className="input-group">
          <div className="input-group-prepend">
          </div>
          <textarea onChange={handleChange} name="csv" className="form-control" aria-label="With textarea"></textarea>
        </div>
        <br/>
        <button onClick={handleSubmit} type="button" className="btn btn-primary">Process</button>
        <br/>
        <br/>
        <select>
          {process.map((info, i) => <DropDownComponent
                                              date={info.date} amount={info.amount} spent={info.spent} key={i}/>)}
        </select>
        <select>
          {process.map((info, i) => <DropDownComponent
            date={info.date} amount={info.amount} spent={info.spent} key={i}/>)}
        </select>

      </div>
    </div>
  );
};

export default TextComponent;

