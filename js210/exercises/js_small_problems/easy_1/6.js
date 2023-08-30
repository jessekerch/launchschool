function shortLongShort(str1, str2) {
  let result = '';
  let length1 = str1.length;
  let length2 = str2.length;

  if (length1 < length2) {
    result = str1 + str2 + str1;
  } else {
    result = str2 + str1 + str2;
  }

  return result;
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"