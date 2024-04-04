function waterfallOverCallbacks(callbacks, n) {
  let result = n;
  callbacks.forEach((cb) => {
    result = cb(result);
  })
  console.log(result);
}

// Example usage:
const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
// Logs: 8