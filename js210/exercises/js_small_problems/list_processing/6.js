function leadingSubstrings(word) {
  return word.split('').map((_char, idx) => word.substring(0, idx + 1));
}

function substrings(word) {
  let result = [];

  for (let idx = 0; idx < word.length; idx += 1) {
    result = result.concat(leadingSubstrings(word.substring(idx)));
  }

  return result;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]