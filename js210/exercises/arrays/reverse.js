function reverse(inputForReversal) {
  let result;
  let lastIndex = inputForReversal.length - 1;

  if (Array.isArray(inputForReversal)) {
    result = [];
    for (let idx = lastIndex; idx >= 0; idx -= 1) {
      result.push(inputForReversal[idx]);
    }    
  } else {
    result = '';
    for (let idx = lastIndex; idx >= 0; idx -= 1) {
      result += inputForReversal[idx];
    }    
  }

  return result;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]