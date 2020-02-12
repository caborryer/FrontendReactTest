const data = []

const csvToArray = function (csvText) {
  const data = csvParser = points = [];
  console.log('inside csvToArray')
  const cvsParser = csvText.split(/[\r?\n|\r|\n]+/);

  for (let i = 0; i < cvsParser.length; i++)
    if (cvsParser[i].length > 0) {
      points = csvParser[i].split(",");
      data.push({
        x: parseFloat(points[0]),
        y: parseFloat(points[1]),
        z: parseFloat(points[1]),
      });

      return data;
    }

}

module.exports = csvToArray


