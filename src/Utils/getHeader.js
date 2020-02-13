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