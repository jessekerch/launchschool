/* eslint-disable max-lines-per-function */
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

function vigenereEncrypt(plainText, keyword) {
  let cipherText = '';
  let keyIdx = 0;
  let key = LOWER.indexOf(keyword[keyIdx]);
  
  for (let idx = 0; idx < plainText.length; idx += 1) {
    if (/[^A-Za-z]/.test(plainText[idx])) {
      cipherText += plainText[idx];
      continue;
    } else if (/[a-z]/.test(plainText[idx])) {
      let newIdx = (LOWER.indexOf(plainText[idx]) + key) % LOWER.length;
      cipherText += LOWER[newIdx];
    } else {
      let newIdx = (UPPER.indexOf(plainText[idx]) + key) % UPPER.length;
      cipherText += UPPER[newIdx];
    }

    keyIdx = (keyIdx === keyword.length - 1) ? 0 : keyIdx + 1;
    key = LOWER.indexOf(keyword[keyIdx]);
  }

  return cipherText;
}

// simple shift
console.log(vigenereEncrypt('A', 'meat'));       // "A"
console.log(vigenereEncrypt('Pineappl', 'meat'));       // "D"

// // // wrap around
console.log(vigenereEncrypt('y', 'meat'));       // "d"
console.log(vigenereEncrypt('a', 'meat'));      // "v"

// // // all letters
console.log(vigenereEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'meat'));
// // // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// // caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));

