function wordSizes(sentence) {
  let lengthCount = {};
  let words = sentence.split(' ');
  words.forEach(word => {
    let wordLength = word.length;
    if (lengthCount[wordLength] > 0) {
      lengthCount[wordLength] += 1;
    } else if (wordLength > 0) {
      lengthCount[wordLength] = 1;
    }
  });

  return lengthCount;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}