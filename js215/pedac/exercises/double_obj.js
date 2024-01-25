/* map to a new object with values doubled from myObject


*/

function doubleObjectValues(obj) {
  let values = Object.values(obj);
  console.log(values);
}

console.log(doubleObjectValues({ a: 1, b: 2, c: 3 })); // { a: 2, b: 4, c: 6 }
