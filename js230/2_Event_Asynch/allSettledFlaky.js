function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

const services = [flakyService(), flakyService(), flakyService()];

Promise.allSettled(services)
  .then((results) => {
    results.forEach((result, idx) => {
      if (result.status === 'fulfilled') {
        console.log(`Service #${idx + 1} completed with value: ${result.value}`);
      } else {
        console.log(`Service #${idx + 1} failed with reason: ${result.reason}`);
      }
    })
  });
