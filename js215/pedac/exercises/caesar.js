/*

Write a function that implements the Caesar Cipher. The Caesar Cipher is one of the earliest and simplest ways
to encrypt plaintext so that a message can be transmitted securely. It is a substitution cipher in which
each letter in a plaintext is substituted by the letter located a given number of positions away in the alphabet.

For example, if the letter 'A' is right-shifted by 3 positions, it will be substituted with the letter 'D'.
This shift value is often referred to as the key. The "encrypted plaintext" (ciphertext) can be decoded using this key value.

rules:
replace each letter with the letter x positions to its right
past 'z' or 'Z', wrap around from beginning
maintain case of original letter
other characters no change
only letters, lower and upper case

input: string and positions count
return: string
data: maintain strings
regex to check if its a lowercase, uppercase, or other

Examples:
upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
lowerAlpha = 'abcdefghijklmnopqrstuvwxyz'
'A' => 0 + 0 => 'A'
'A' => 0 + 3 % 26 => 'D'
'y' => 24 + 5 % 26 => 'd'

Data:
Strings
Convert message to array, convert back to string to return
Numbers for index positions
Use an alphabet string so I can use the index of each letter I'm looking up
Actually two UpperAlpha and LowerAlpha, depending on which I need
% 26 each time I add the positions count so that it will "wrap around"

algo:
input message string and rotCount number of positions to rotate
declare constant upperAlpha for uppercase letters string
declare constant lowerAlpha for lowercase letters string
split message into chars array of single characters ('' delimiter)
map over each char of message array, save return array as cipherChars
  return rotated char
  => HELPER rotate function, pass char and rotCount
    if char is lowercase letter
      new index is (index of char in lowerAlpha + rotCount % 26)
      return char at new index of lowerAlpha
    else if char is uppercase letter
      new index is (index of char in upperAlpha + rotCount % 26)
      return char at new index of upperAlpha
    else 
      return char

  join array of chars in to string
  return string
*/

const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerAlpha = 'abcdefghijklmnopqrstuvwxyz';

function rotateUpper(letter, count) {
  let index = upperAlpha.indexOf(letter);
  let newIdx = (index + count) % 26;
  return upperAlpha[newIdx];
}

function rotateLower(letter, count) {
  let index = lowerAlpha.indexOf(letter);
  let newIdx = (index + count) % 26;
  return lowerAlpha[newIdx];
}

function caesarEncrypt(message, rotCount) {
  let chars = message.split('');
  let cipherChars = chars.map((char) => {
    if (/[a-z]/.test(char)) {
      return rotateLower(char, rotCount);
    } else if (/[A-Z]/.test(char)) {
      return rotateUpper(char, rotCount);
    } else {
      return char;
    }
  });

  return cipherChars.join('');
}

// // simple shift
console.log(caesarEncrypt('A', 0));       // "A"
console.log(caesarEncrypt('A', 3));       // "D"

// // wrap around
console.log(caesarEncrypt('y', 5));       // "d"
console.log(caesarEncrypt('a', 47));      // "v"

// // // all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// // // "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// // // "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// // // many non-letters
console.log(caesarEncrypt('There are, as you can see, many punctuations. Right?; Wrong?', 2));
// // // "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"