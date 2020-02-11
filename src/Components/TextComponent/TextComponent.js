import React, {useEffect, useState} from 'react';
import Papa from 'papaparse'



const TextComponent = () => {
  const [csv, setCsv] = useState('');


  const handleChange = e => {
    setCsv({
      ...csv,
      [e.target.name]: e.target.value
    })
    const change = Papa.parse(csv)
    console.log(change)
  }

  useEffect(() => {
    const processData = () => {

    }
  }, [csv])


  const handleSubmit = e => {
    e.preventDefault();
    console.log(csv)
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

        <button onSubmit={handleSubmit} type="button" className="btn btn-primary">Process</button>
      </div>
    </div>
  );
};

export default TextComponent;