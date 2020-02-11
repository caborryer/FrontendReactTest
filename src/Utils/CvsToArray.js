const csvParser = require('csv-parser');
const fs = require('fs');

  fs.createReadStream('data.csv')
  .pipe(csvParser())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });