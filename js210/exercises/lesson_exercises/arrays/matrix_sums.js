function matrixSums(arr) {
  sumsArr = arr.map(function(subArray) {
    return subArray.reduce((accumulator, value) => accumulator + value, 0);
  })

  return sumsArr;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]
