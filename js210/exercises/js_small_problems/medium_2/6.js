function squareOfSums(arr) {
  return Math.pow(arr.reduce((sum, val) => sum + val), 2);
}


function sumOfSquares(arr) {
  return arr.reduce((sum, val) => sum + Math.pow(val, 2));
}


function sumSquareDifference(num) {
  let arr = [];
  for (let i = 1; i <= num; i += 1) arr.push(i);
  return squareOfSums(arr) - sumOfSquares(arr);
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150