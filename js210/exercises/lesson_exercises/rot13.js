const NO_OF_ROTATION_PLACES = 13;
const ALPHABET_LENGTH = 26;
const UPPER_Z_CODE = 90;
const LOWER_Z_CODE = 122;

// if character is an upper or lowercase letter, rotate it the set number of places
function rotateCharacter(char) {
  let charCode = char.charCodeAt(0) + NO_OF_ROTATION_PLACES;

  if (char >= 'A' && char <= 'Z') {
    if (charCode > UPPER_Z_CODE) charCode -= ALPHABET_LENGTH;
    char = String.fromCharCode(charCode);
  } else if (char >= 'a' && char <= 'z') {
    if (charCode > LOWER_Z_CODE) charCode -= ALPHABET_LENGTH;
    char = String.fromCharCode(charCode);
  }

  return char;
}

function rot13(sentence) {
  let newSentence = '';

  for (let idx = 0; idx < sentence.length; idx += 1) {
    let newChar = rotateCharacter(sentence[idx]);
    newSentence += newChar;
  }

  return newSentence;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.