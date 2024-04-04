function startCounter(cb) {
  let count = 1;
  let counter = setInterval(() => {
    if (cb(count)) {
      clearInterval(counter);
    } else {
      count++;
    }
  }, 1000);
}

startCounter((count) => {
  console.log(count);
  return count === 5;
});