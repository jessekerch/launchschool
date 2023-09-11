function average(values) {
  return Math.floor(sum(values)/values.length);
}

function sum(values) {
  total = 0;
  for (let i = 0; i < values.length; i += 1) {
    total += values[i];
  }
  return total;  
}

console.log(average([1, 2, 3, 4, 5]));
console.log(average([3, 3, 3, 3, 3]));
