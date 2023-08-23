// function findIntegers(arr) {
//   let newArr = []
//   arr.forEach(function(value) {
//     if (Number.isInteger(value)) {
//       newArr.push(value);
//     }
//   });

//   return newArr;
// }

function findIntegers(arr) {
  return arr.filter(num => Number.isInteger(num));
}

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false, 101];
let integers = findIntegers(things);
console.log(integers); // => [1, 3, -4]

// Number.isInteger(value) => true if value is an integer
