Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num + 5)
  .then(result => console.log(result));
  