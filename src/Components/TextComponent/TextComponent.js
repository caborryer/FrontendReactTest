import React, { useState } from 'react';
import Papa from 'papaparse';
import OptionComponent from '../DropDownComponent/DropDownComponent';

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
  const createOptions = () => {
    const options = []
    if (process.length > 0) {
      console.log(process)
      const iterator = process.data[0].keys()
      for (let key of iterator) {
        options.push(key)
      }
    }
    return options
  }

  const handleSubmit = e => {
    e.preventDefault();
   
    const change = Papa.parse(csv, config)
    setProcess(change)
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
          {console.log(process)}
          {createOptions().map((info) => <OptionComponent
            optionText={info} key={info} name={info.data.amount}/>)}
        </select>

      </div>
    </div>
  );
};

export default TextComponent;

