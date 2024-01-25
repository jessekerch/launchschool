function flakyService() {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

function loadData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Data loaded");
      } else {
        reject("Network error");
      }
    }, 1000);
  });
}

let promise1 = flakyService();
let promise2 = flakyService();
let promise3 = loadData();

Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(results))
  .catch(() => console.error('One or more operation failed'));

