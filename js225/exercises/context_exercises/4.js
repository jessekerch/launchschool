// function myBind(func, ctx, ...partialArgs) {
//   return function(...args) {
//     const fullArgs = partialArgs.concat(args);

//     return func.apply(ctx, fullArgs);
//   };
// }

function myFilter(array, func, ctx) {
  const result = [];

  array.forEach(value => {
    if (func.call(ctx, value)) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

console.log(myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter)); // returns [5, 6]