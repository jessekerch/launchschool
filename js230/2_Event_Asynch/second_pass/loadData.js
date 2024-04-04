function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Data loaded');
      } else {
        reject('Network error');  
      }
    }, 1000);
  }).catch((err) => {
    console.error(err);
    return Promise.resolve('Using cached data');
  })
}

loadData()
  .then(console.log);