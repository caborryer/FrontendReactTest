import React, { useEffect, useState } from 'react';
const csvParser = require('csv-parser');
const fs = require('fs');

const ProcessButton = () => {
  const [data, setData] =useState([])

  const handleSubmit = e =>{
    e.preventDefault()

    function proba() {
      const data = fs.createReadStream('data.csv')
      data.pipe(csvParser())
      data.on('data', (row) => {
        setData(row);
      })
      data.on('end', () => {
        console.log('CSV file successfully processed');
      });
    }
    console.log(proba)

  }




  return (
    <div>
      <button onClick={handleSubmit} type="button" className="btn btn-primary">Process</button>
    </div>
  );
};

export default ProcessButton;