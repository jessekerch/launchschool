function numberSum(array) {
  return array.reduce((sum, num) => sum + num);
}

let numbers = [4, 4, 4];
console.log(numberSum(numbers));
