function retryOperation(operationFunc) {
  let tries = 0;

  function attempt() {
    return operationFunc().then(() => console.log('Operation successful'))
    .catch((err) => {
        if (tries < 2) {
          tries++;
          console.log('Failed but trying again');
          return attempt();
        } else {
          throw err;
        }
    });
  }

  return attempt().catch(() => console.error('Operation failed, not trying again'));
}

// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() < 0.33
        ? resolve("Success!")
        : reject(new Error("Fail! Trying again..."))
    )
);