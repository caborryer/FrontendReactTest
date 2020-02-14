import React, { useState } from 'react';
import Papa from 'papaparse';
import TextAreaComponent from "../TextAreaComponent/TextAreaComponent";


const TextComponent = () => {

  const [csv, setCsv] = useState('');
  const [headers, saveHeaders] = useState([], { Labelx: 'X AXIS', labely: 'Y AXIS' })

  const handleChange = e => {
    setCsv(e.target.value)
  }

  const config = {
    delimiter: ",",
    header: true,
    dynamicTyping: true,
    transformHeader: function (h) {
      return h.trim();
    }
  }

  function csvParser() {
    const change = Papa.parse(csv, config)
    const dataObject = (change.data[1])
    const headers = Object.keys(dataObject)
    console.log(change.data)
    saveHeaders(headers)

    return change
  }

  const handleClick = e => {
    e.preventDefault();
    csvParser()
  }


  return (
    <>
      <div className="container">
        <h1>Paste your cvs dates</h1>
        <div className="principalContend contend">
          <TextAreaComponent onChange={handleChange}/>
        </div>
        <br/>
        <button onClick={handleClick} type="button" className="btn btn-primary">Process</button>
        <br/>
        <br/>
        <select>
          {headers.map((header) => <option>{header}</option>)}
        </select>
        <select>
          {headers.map((header) => <option>{header}</option>)}
        </select>

      </div>
    </>

  );
};

export default TextComponent;

