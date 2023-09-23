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

function isPalindrome(word) {
  return word.length > 1 && word === word.split('').reverse().join('');
}

function palindromes(mainString) {
  return substrings(mainString).filter(isPalindrome);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ];

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
