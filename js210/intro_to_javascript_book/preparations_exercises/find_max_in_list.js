function findMax(list) {
  let max = list[0];
  for (let num of list) {
    if (num > max) max = num;
  }
  return max;
}

console.log(findMax([1, 6, 3, 2]));
console.log(findMax([-1, -6, -3, -2]));
console.log(findMax([2, 2]));
