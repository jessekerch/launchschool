let myArray = [2, 2, 2];

const sum = function addArrayValues(arr) {
  // arrow function implicit return if single expression
  let result = arr.reduce((sum, num) => sum + num);

  // if omitted, sum() will implicitly return undefined
  return result;
};

console.log(sum(myArray));
