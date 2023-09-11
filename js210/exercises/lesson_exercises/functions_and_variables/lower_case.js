function lowerChar(char) {
  let asciiNumeric = char.charCodeAt(0);
  asciiNumeric += 32;
  return String.fromCharCode(asciiNumeric);
}

function toLowerCase(string) {
  let lowerWord = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'A' && string[index] <= 'Z') {
      lowerWord += lowerChar(string[index]);
    } else {
      lowerWord += string[index];
    }
  }
  console.log(lowerWord);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"