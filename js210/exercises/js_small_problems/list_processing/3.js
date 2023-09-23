function multiplyAllPairs(arr1, arr2) {
  let result = [];

  arr1.forEach(value1 => {
    arr2.forEach(value2 => {
      result.push(value1 * value2);
    });
  });

  return result.sort((a, b) => Number(a) - Number(b));
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]