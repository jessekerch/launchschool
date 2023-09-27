const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6]
];

function transpose(matrix) {
  const result = [[], [], []];
  matrix.forEach((row, rowIdx) => {
    row.forEach((val, colIdx) => {
      result[colIdx][rowIdx] = val;
    });
  });

  return result;
}


const newMatrix = transpose(matrix);

console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]