function startCounter(cb) {
  let n = 1;
  const IntervalId = setInterval(() => {
    if (cb(n++)) clearInterval(IntervalId);
    }, 500)
}

startCounter((count) => {
  console.log(count);
  return count === 5;
});
// Logs 1, 2, 3, 4, 5, then stops