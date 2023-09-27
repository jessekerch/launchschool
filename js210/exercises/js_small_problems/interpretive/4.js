const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

function caesarEncrypt(plainText, key) {
  let cipherText = '';

  for (let idx = 0; idx < plainText.length; idx += 1) {
    if (/[^A-Za-z]/.test(plainText[idx])) {
      cipherText += plainText[idx];
    } else if (/[a-z]/.test(plainText[idx])) {
      let newIdx = (LOWER.indexOf(plainText[idx]) + key) % UPPER.length;
      cipherText += LOWER[newIdx];
    } else {
      let newIdx = (UPPER.indexOf(plainText[idx]) + key) % LOWER.length;
      cipherText += UPPER[newIdx];
    }
  }

  return cipherText;
}

// simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
// caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5);
// // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"