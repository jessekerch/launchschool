function flakyServicePromise() {  
  return new Promise((resolve, reject) => {
    let condition = !!Math.round(Math.random());
    console.log(condition);
    if (condition) {
      resolve("Operation successful");
    } else {
      reject("Operation failed");
    }
  });
}

function logIt(message) {
  console.log(message);
}

flakyServicePromise()
  .then(logIt)
  .catch((errorMessage) => {
    console.error("Uh oh! " + errorMessage);
  })
  .finally(() => {
    console.log("Cleaning up...");
  });
