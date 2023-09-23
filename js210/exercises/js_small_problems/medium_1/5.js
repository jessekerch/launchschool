const WORD_DIGITS = { zero: 0, one: 1, two: 2, three: 3,
  four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9,
};

function wordToDigit(sentence) {
  Object.keys(WORD_DIGITS).forEach(key => {
    let regex = new RegExp('\\b' + key + '\\b', 'gi');
    sentence = sentence.replace(regex, WORD_DIGITS[key]);
  });
  return sentence;
}


console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."