function sumOfSums(array) {
  let totalSum = 0;

  for (let end = 1; end <= array.length; end += 1) {
    totalSum += array.slice(0, end).reduce((sum, num) => sum + num);
  }

  return totalSum;
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35