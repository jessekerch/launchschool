/*
A collection of spelling blocks has two letters per block, as shown in this list:

B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks to only those words that
do not use both letters from any given block. You can also only use each block once.

Write a function that takes a word string as an argument,
and returns true if the word can be spelled using the set of blocks, or false otherwise.
You can consider the letters to be case-insensitive when you apply the rules.

Examples:
input: string
return: boolean true if possible or false if not
(used string includes = false, otherwise return true at end)

rules:
if input includes non alpha characters, return false
if input blank string, return false
case insensitive
using one letter also uses up its letter pair (using B will also use O)
if any letter is unavailable (already used) return false

data:
string to hold used letters, easy to find with includes or indexof 

array of arrays for letter pairs?
B => if letter isn't in used string, iterate over each pair and if it includes B, add that pair to used

object with each letter as key and pairs as values (yes)
B => if letter isn't in used string, add the value pair to used 

algo:
if word includes nonalpha characters, return false
if word is blank string, return false
split word into array of chars
map chars into all uppercase chars
iterate index from 0 up to (not incl) length of word
  if char at index is included in used blocks, return false
  else 
    add BLOCKS value of char property to used blocks (add two letters to used block string)

return true from function (unless false already returned)
*/

const BLOCKS = {
  B: 'BO', O: 'BO',
  X: 'XK', K: 'XK',
  D: 'DQ', Q: 'DQ',
  C: 'CP', P: 'CP',
  N: 'NA', A: 'NA',
  G: 'GT', T: 'GT',
  R: 'RE', E: 'RE',
  F: 'FS', S: 'FS',
  J: 'JW', W: 'JW',
  H: 'HU', U: 'HU',
  V: 'VI', I: 'VI',
  L: 'LY', Y: 'LY',
  Z: 'ZM', M: 'ZM',
};


function isBlockWord(word) {
  if (word.length === 0) return false;
  if (word.match(/[^A-Za-z]/g)) return false;

  let usedBlocks = '';

  let chars = word.split('').map((char) => char.toUpperCase());
  for (let idx = 0; idx < chars.length; idx += 1) {
    if (usedBlocks.includes(chars[idx])) {
      return false;
    } else {
      usedBlocks += BLOCKS[chars[idx]];
    }

  }
  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('bb'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord('CudgeL'));       // true
console.log(isBlockWord('9%b'));       // false
console.log(isBlockWord(''));       // false
