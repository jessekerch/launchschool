// function slice(array, begin, end) {
//   begin = begin > array.length ? array.length : begin;
//   end = end > array.length ? array.length : end;

//   let extractedVals = [];
//   for (let idx = begin; idx < end; idx += 1) {
//     extractedVals.push(array[idx]);
//   }

//   return extractedVals;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > array.length ? array.length - start : deleteCount;

  let arrayCopy = [];
  let deletedValues = [];
  for (let idx = 0; idx < array.length; idx += 1) {
    if (deleteCount > 0 && idx >= start) {
      deletedValues.push(array[idx]);
      deleteCount -= 1;
      if (args.length > 0 && deleteCount === 0) {
        args.forEach(arg => arrayCopy.shift(arg));
      }
    } else {
      arrayCopy.push(array[idx]);
    }
  }

  console.log(arrayCopy);

  array.length = 0;
  for (idx = 0; idx < arrayCopy.length; idx += 1) {
    array.push(arrayCopy[idx]);
  }

  return deletedValues;
}

// console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
// console.log(splice([1, 2, 3], 1, 0));              // []
// console.log(splice([1, 2, 3], 0, 1));              // [1]
// console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

// const arr2 = [1, 2, 3];
// console.log(splice(arr2, 1, 1, 'two'));             // [2]
// console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

// const arr4 = [1, 2, 3];
// console.log(splice(arr4, 1, 0));                    // []
// console.log(splice(arr4, 1, 0, 'a'));               // []
// console.log(arr4);                                  // [1, "a", 2, 3]

// const arr5 = [1, 2, 3];
// console.log(splice(arr5, 0, 0, 'a'));               // []
// console.log(arr5);                                  // ["a", 1, 2, 3]