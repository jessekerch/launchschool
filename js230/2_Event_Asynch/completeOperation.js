function operation() {
  return new Promise((resolve) => {
    console.log("Doing some operation");
    setTimeout(() => {
      resolve("Operation complete");
    }, 1000);
  });
}

operation()
  .then(console.log)
  .catch(console.log)
  .finally(() => {
    console.log("Closing file");
  });

