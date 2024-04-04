let cleanUp = new Promise(resolve => resolve('Operation complete'));

cleanUp
  .then(console.log)
  .finally(() => console.log('Cleaning up'));