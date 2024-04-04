function waterfallOverCallbacks(callbacks, num) {
  let result = num;
  callbacks.forEach(cb => {
    result = cb(result);
  })
  console.log(result);
}

const double = (x) => x * 2;
waterfallOverCallbacks([double, double, double], 1);
