function toLowerCase(string) {
  let result = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    let char = string[idx];
    if (char >= 'A' && char <= 'Z') {
      result += char.toLowerCase();
    } else {
      result += char;
    }
  }
  console.log(result);
}

toLowerCase('ALPHABET');    // "alphabet"
toLowerCase('123');         // "123"
toLowerCase('abcDEF');      // "abcdef"
