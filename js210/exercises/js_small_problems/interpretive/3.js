let BLOCKS = [
  ['B', 'O'], ['X', 'K'], ['D', 'Q'],
  ['C', 'P'], ['N', 'A'], ['G', 'T'],
  ['R', 'E'], ['F', 'S'], ['J', 'W'],
  ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']
];

function isBlockWord(word) {
  let blocksLeft = BLOCKS.slice();

  word = word.toUpperCase();
  for (let idx = 0; idx < word.length; idx += 1) {
    if (!blocksLeft.some(block => block.includes(word[idx]))) {
      return false;
    } else {
      blocksLeft = blocksLeft.filter(block => !block.includes(word[idx]));
    }
  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('floW'));       // true
console.log(isBlockWord('APPLE'));      // false
console.log(isBlockWord('apple'));      // false
console.log(isBlockWord('apPLE'));      // false
console.log(isBlockWord('Box'));        // false