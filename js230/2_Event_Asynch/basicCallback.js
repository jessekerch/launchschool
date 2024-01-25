function startCounter(cb) {
  let counter;
  let counterID = setInterval(() => {
    counter++;
    if (cb(counter)) {
      clearInterval(counterID);
    }
  }, 1000);
}



// Example usage:
startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops