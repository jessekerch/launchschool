// This was practice for JS216 Launch School
// I got a good way for unique subarrays of a given array and x elements
// using "count" as the x element count
// cocatenating the outerIdx element with a slice of inner range from start to end
// skipping any combinations where the outerIdx is between inner slice range (outer >= start <= end)
// this problem was asking for products but can be substrings or anything

function getProducts(array, count) {
  let products = [];

  for (let outerIdx = 0; outerIdx < array.length; outerIdx += 1) {
 
    for (let innerIdx = 0; innerIdx < array.length; innerIdx += 1) {
      let innerStart = innerIdx;
      let innerEnd = innerIdx + count - 1;
      
      if (outerIdx >= innerStart && outerIdx <= innerEnd) continue;

      let currentSubArr = [array[outerIdx]].concat(array.slice(innerStart, innerEnd));
      if (currentSubArr.length === count) {
        let currentProduct = currentSubArr.reduce((acc, num) => acc * num, 1);
        if (!products.includes(currentProduct)) products.push(currentProduct);
      }
    }
  }
  return products;
}

function productPair(numbers, count) {
  if (numbers.length < count) return null;

  let products = getProducts(numbers, count);

  let minProduct = Math.min(...products.sort());
  let maxProduct = Math.max(...products.sort());

  return [minProduct, maxProduct];
}

console.log(productPair([1, -2, -3, 4, 6, 7], 1)); // ➞ [-3, 7]

console.log(productPair([1, -2, -3, 4, 6, 7], 2)); // ➞ [-21, 42]
// // -3*7, 6*7

console.log(productPair([1, -2, -3, 4, 6, 7], 3)); // ➞ [-126, 168]
// // -3*6*7, 4*6*7

console.log(productPair([1, -2, -3, 4, 6, 7], 7)); // ➞ null
// // There are only 6 elements in the array
