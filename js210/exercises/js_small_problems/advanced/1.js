/**
Build a madlibs program that takes a text template as input,
plugs in a selection of randomized nouns, verbs, adjectives, and adverbs
into that text, and then returns it.
Your program should read this text and, for each line,
place random words of the appropriate types into the text and return the result.

!!it's about choosing the structure of the text template

Examples below:

Data: 
Use object for madwords. Parts of speech as keys, and words as values.
Then can look up words based on a random number as index from 0 to length of array
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
Use splice to splice out that one index element,
mutating the array so that words don't get reused

What about the template structure?
// The "adjective" brown "noun" "noisily"
// "verb" the "adjective" yellow
// "noun", who "adverb" "verb" his
// "noun" and looks around.

I'm just going to let the template be a string. Iterate over each key of the words object
(adjective, verb, etc), replace each of those keys in the template with a random value
(e.g. replace "adjective" with "lazy" or other random value), then output the string.

 */

const MAD_WORDS = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function madlibs(template) {
  let result = template;

  Object.keys(MAD_WORDS).forEach((key) => {
    let replaced;

    do {
      replaced = false;
      let regex = new RegExp('\\b' + key);

      if (regex.test(result)) {
        let rndIdx = getRandomInt(MAD_WORDS[key].length);
        let newWord = MAD_WORDS[key].splice(rndIdx, 1)[0];
        result = result.replace(regex, newWord);
        replaced = true;
      }
    } while (replaced);

  });

  console.log(result);
}

  // console.log(Object.keys(MAD_WORDS));
  // let result = template.split(' ')
  //   .map((word) => {
  //     console.log(word);
  //     if (Object.keys(MAD_WORDS).includes(word)) {
  //       let index = getRandomInt(MAD_WORDS[word].length);
  //       let newWord = MAD_WORDS[word].splice(index, 1);
  //       return newWord;
  //     } else {
  //       return word;
  //     }
  //   })
  //   .join(' ');


const template1 = 'The adjective brown noun noisily verb the adjective yellow noun, who adverb verb his noun and looks around.';

const template2 = "The noun verb the noun's tail.";

madlibs(template1);
// // The "sleepy" brown "cat" "noisily"
// // "licks" the "sleepy" yellow
// // "dog", who "lazily" "licks" his
// // "tail" and looks around.

madlibs(template1);
// // The "hungry" brown "cat" "lazily"
// // "licks" the "noisy" yellow
// // "dog", who "lazily" "licks" his
// // "leg" and looks around.

madlibs(template2);      // The "fox" "bites" the "dog"'s "tail".

madlibs(template2);      // The "cat" "pats" the "cat"'s "head".