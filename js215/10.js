function anagram(word, list) {
  sortedWord = word.split('').sort().join('');

  return list.filter((candidate) => {
    return candidate.split('').sort().join('') === sortedWord;
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]
