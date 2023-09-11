function concat(arr1, arr2) {
  let allValues = [];
  for (let idx = 0; idx < arr1.length; idx += 1) {
    allValues.push(arr1[idx]);
  }

  for (let idx = 0; idx < arr2.length; idx += 1) {
    allValues.push(arr2[idx]);
  }

  console.log(allValues); 
}

concat([1, 2, 3], [4, 5, 6]);       // [ 1, 2, 3, 4, 5, 6 ]