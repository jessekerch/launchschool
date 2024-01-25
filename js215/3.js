function myMap(array, func) {
  const newArray = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    newArray.push(func(array[idx]));
  }
  return newArray;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]
