function wordSizes(sentence) {
  let lengthCount = {};
  let words = sentence.split(' ');
  words = words.map(word => word.replace(/[^A-Za-z]/, ''));

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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}