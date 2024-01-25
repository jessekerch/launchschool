/*
The Vigenere Cipher encrypts alphabetic text using polyalphabetic substitution.
It uses a series of Caesar Ciphers based on the letters of a keyword.
Each letter of the keyword is treated as a shift value.
For instance, the letter 'B' corresponds to a shift value of 1,
and the letter 'd' corresponds to a shift value of 3.
In other words, the shift value used for a letter is equal to its index value in the alphabet.
This means that the letters 'a'-'z' are equivalent to the numbers 0-25.
The uppercase letters 'A'-'Z' are also equivalent to 0-25.

Applying the Vigenere Cipher is done sequentially for each character by applying
the current shift value to a Caesar Cipher for that particular character.
To make this more concrete, let's look at the following example:

plaintext: Pineapples don't go on pizzas!
keyword: meat

Applying the Vigenere Cipher for each alphabetic character:
plaintext : Pine appl esdo ntgo onpi zzas
shift     : meat meat meat meat meat meat
ciphertext: Bmnx mtpe qwdh zxgh arpb ldal

result: Bmnxmtpeqw dhz'x gh ar pbldal!

Notice that in the example, the key isn't moved forward if the character isn't in the alphabet.
Like the Caesar Cipher, the Vigenere Cipher only encrypts alphabetic characters.

Write a function that implements the Vigenere Cipher.
The case of the keyword doesn't matter—in other words,
the resulting encryption won't change depending on the case of the keyword's letters
(e.g., 'MEat' === 'mEaT').

rules: 

data:

algo:
declare key index at 0
split text into array of chars
map over array of text chars
  if char is a-z or A-Z, rotate it with current key char value
  => HELPER rotate char (char, keyVal)
    new index is alphabet index of char + keyVal % 25 (wrapping around z=>a)
    return char at new Index of alpha (lower or upper) 
  key index += 1 % key.length-1 (so wrap around if needed 0m,1e,2a,3t,0m,1e...)
join chars back together and return

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

function vigenere(text, key) {
  key = key.toLowerCase();
  let keyIdx = 0;
  let count;
  let chars = text.split('');
  let vigChars = chars.map((char) => {
    if (/[a-z]/.test(char)) {
      count = lowerAlpha.indexOf(key[keyIdx]);
      keyIdx = (keyIdx + 1) % key.length;
      return rotateLower(char, count);
    } else if (/[A-Z]/.test(char)) {
      count = lowerAlpha.indexOf(key[keyIdx]);
      keyIdx = (keyIdx + 1) % key.length;
      return rotateUpper(char, count);
    } else {
      return char;
    }
  });

  return vigChars.join('');  
}

console.log(vigenere("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!
