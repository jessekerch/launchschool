
function retryOperation(func) {
  let attempts = 1;
  function attempt() {
    return func()
      .then((msg) => console.log(msg))
      .catch(() => {
        if (attempts < 3) {
          attempts++;
          console.log('Failed. Going again, try number ' + attempts);
          return attempt();
          } else {
            console.log('Failed after 3 attempts.');
          }
    });
  }

  return attempt().catch(() => console.log('Operation failed'));
}

retryOperation(
  () =>
    new Promise((resolve, reject) =>
      Math.random() < 0.33
        ? resolve("Success!")
        : reject(new Error("Fail!"))
    )
);
