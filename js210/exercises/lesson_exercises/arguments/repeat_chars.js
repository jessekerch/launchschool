function repeatedCharacters(stringToCheck) {
  let repeatCharCounts = {};

  for (let charIdx = 0; charIdx < stringToCheck.length; charIdx += 1) {
    let currentChar = stringToCheck[charIdx].toLowerCase();
    let count = 0;
    for (let checkIdx = 0; checkIdx < stringToCheck.length; checkIdx += 1) {
      let checkChar = stringToCheck[checkIdx].toLowerCase();
      if (currentChar === checkChar) count += 1;
    }
    if (count >= 2) repeatCharCounts[char] = count;
  }

  return repeatCharCounts;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }