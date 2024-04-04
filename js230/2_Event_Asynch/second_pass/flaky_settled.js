const services = [flakyService(), flakyService(), flakyService()];

function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

Promise.allSettled(services)
  .then((results) => {
    results.forEach((result, idx) => {
      if (result.status === 'fulfilled') {
        console.log(`Service ${idx + 1} Success: ` + result.value);
      } else {
        console.log(`Service ${idx + 1} Failed: ` + result.reason);
      }
    })
  })
  .catch(console.log)