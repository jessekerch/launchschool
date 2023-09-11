function wordCount (string) {
  let newObject = {};
  let wordArray = string.split(' ');
  wordArray.forEach(word => {
    if (newObject[word]) {
      newObject[word] += 1;
    } else {
      newObject[word] = 1;
    }
  });
  return newObject;
}

console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }