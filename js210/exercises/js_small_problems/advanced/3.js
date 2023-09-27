const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  const result = [];
  for (let rowCount = 1; rowCount <= matrix[0].length; rowCount += 1) {
    result.push([]);
  }

  matrix.forEach((row, rowIdx) => {
    row.forEach((val, colIdx) => {
      result[colIdx][rowIdx] = val;
    });
  });

  return result;
}


console.log(transpose([[1, 2, 3, 4]]));            // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]]));      // [[1, 2, 3, 4]]
console.log(transpose([[1]]));                     // [[1]]

console.log(transpose([[1, 2, 3, 4, 5], [4, 3, 2, 1, 0], [3, 7, 8, 6, 2]]));
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]