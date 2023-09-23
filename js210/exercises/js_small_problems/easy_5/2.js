const doubleConsonants = function doubleIt(string) {
  let letters = string.split('');
  let doubledLetters = letters.map((letter) => 'aeiou'.includes(letter.toLowerCase()) ? letter : letter.repeat(2));

  console.log(doubledLetters.join(''));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""