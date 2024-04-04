const promise = new Promise((resolve, reject) => {
  throw new Error("it's an error");
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Caught an error:", error.message);
    return 1;
  })
  .then((newResult) => {
    console.log(newResult);
    return newResult;
  })
  .then((lastResult) => {
    lastResult
    console.log(lastResult);
  });
