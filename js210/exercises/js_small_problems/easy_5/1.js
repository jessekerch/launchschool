function repeater(string) {
  let doubledString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    doubledString += string[idx].repeat(2);
  }
  console.log(doubledString);
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
