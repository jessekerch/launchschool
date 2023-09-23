function reverseWords(sentence) {
  const result = [];
  const words = sentence.split(' ');

  for (let idx = 0; idx < words.length; idx += 1) {
    if (words[idx].length < 5) {
      result.push(words[idx]);
    } else {
      result.push(words[idx].split('').reverse().join(''));
    }
  }

  return result.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"