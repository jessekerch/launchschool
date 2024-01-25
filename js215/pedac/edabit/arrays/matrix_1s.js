/*
Write a function that replaces every row and column that contains at least one 1 into a row/column that is filled entirely with 1s.
Examples

rules:
always one input argument
arrays may contain other than 0 and 1
input matrices have at least one row one column
empty array input, return empty arrays
must mutate original array => return input array
every row containing a 1, filled with 1's
every col containing a 1, filled with 1's

data:
array input and array return value
array functions 

algo:
input matrix;
declare rowOnes empty array
declare colOnes empty array
if input if empty array, return matrix 
for each row (subarray) and rowIndex
  for each element and colIndex
    if element 1
      add rowIndex to collection of rowOnes
      add colIndex to collection of colOnes

map over matrix rows and rowIndexes
  map over matrix columns and colIndexes
    if rowOnes includes the rowIndex or if colOnes includes colIndex
      replace current element with 1
    else 
      keep current element

return matrix;


[
  [0, 0, 1] => [1, 1, 1]
  [0, 0, 0] => [0, 0, 1]
  [0, 0, 0] => [0, 0, 1]
]

[
  [0, 1, 0, 1] Yes, rowIdx = [0]; colIdx = [1, 3]
  [0, 0, 0, 0] Yes, rowIdx = [0]; colIdx = [1, 3]
  [0, 1, 0, 0] Yes, rowIdx = [0], 3; colIdx = 1, 3
]

[
  [1, 1, 1, 1] => 
  [0, 1, 0, 1],
  [1, 1, 1, 1]
]

*/

function onesInfection(matrix) {
  let rowOnes = [];
  let colOnes = [];

  if (matrix[0].length === 0) return matrix;

  matrix.forEach((row, rowIdx) => {
    row.forEach((element, colIdx) => {
      if (element === 1) {
        rowOnes.push(rowIdx);
        colOnes.push(colIdx);
      }
    });
  });

  matrix.map((row, rowIdx) => {
    row.map((element, colIdx) => {
      if (rowOnes.includes(rowIdx) || colOnes.includes(colIdx)) {
        matrix[rowIdx][colIdx] = 1;
      } else {
        return element;
      }
    });
  });
  return matrix;
}

console.log(onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
]));
// ➞ [
//   [1, 1, 1],
//   [0, 0, 1],
//   [0, 0, 1]
// ]

// console.log(onesInfection([[]]));
// ➞ [
//   [1, 1, 1],
//   [0, 0, 1],
//   [0, 0, 1]
// ]

console.log(onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
]));
// ➞ [
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 0]
// ]

console.log(onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
]));
// ➞ [
//   [1, 1, 1, 1],
//   [0, 1, 0, 1],
//   [1, 1, 1, 1]
// ]

console.log(onesInfection([
  [0, 'a', 1],
  [0, 0, 0],
  ['3', 0, []]
]));

// ➞ [
//   [1, 1, 1],
//   [0, 0, 1],
//   ['3', 0, 1]
// ]



