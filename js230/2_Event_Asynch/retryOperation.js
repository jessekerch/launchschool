function retryOperation(operationFunc) {
  let counter = 0;

  function attempt() {
    return operationFunc().catch((error) => {
      if (counter < 2) {
        counter += 1;
        console.log(`Retry attempt #${counter}`);
        return attempt();
      } else {
        throw error;
      }
    });
  }

  return attempt()
    .then(() => console.log("Operation completed"))
    .catch(() => console.error("Operation failed"));
}

retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() > 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);
