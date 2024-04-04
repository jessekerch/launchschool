function retryOperation(operationFunc) {
  let attempts = 0;

  function attempt() {
    return operationFunc().catch((err) => {
      if (attempts < 2) {
        attempts++;
        console.log(`Retry attempt #${attempts}`);
        return attempt();  //  ****** LINE "A" ******* 
      } else {
        throw err;
      }
    });
  }

  return attempt().catch(() => console.log("Operation failed"));  //  ****** LINE "B" *******
}

// Example usage:
retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);