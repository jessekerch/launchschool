function union(arr1, arr2) {
  let combined = arr1.concat(arr2);
  return combined.filter((number, index, array) => array.indexOf(number) === index);
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]