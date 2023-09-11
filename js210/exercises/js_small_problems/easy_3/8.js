function switchLetters(word) {
  let array = word.split('');
  [array[0], array[array.length - 1]] = [array[array.length - 1], array[0]];
  return array.join('');
}

function swap(string) {
  let swappedWords = string.split(' ').map(word => switchLetters(word));

  return swappedWords.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"