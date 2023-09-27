const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

function rotate90(orgMatrix) {
  const result = [];
  for (let rowCount = 1; rowCount <= orgMatrix[0].length; rowCount += 1) {
    result.push([]);
  }
  let maxRowIdx = orgMatrix.length - 1;

  for (let rowIdx = 0; rowIdx < orgMatrix.length; rowIdx += 1) {
    for (let colIdx = 0; colIdx < orgMatrix[0].length; colIdx += 1) {
      result[colIdx][maxRowIdx - rowIdx] = orgMatrix[rowIdx][colIdx];
    }
  }

  return result;
}

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]