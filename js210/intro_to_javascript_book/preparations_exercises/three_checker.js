function threeCheck(array) {
  return array.includes(3);
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(threeCheck(numbers1));
console.log(threeCheck(numbers2));
console.log(threeCheck(numbers3));
