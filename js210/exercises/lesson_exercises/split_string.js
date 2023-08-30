/*
Write a function that logs split strings to the console based on a delimiter
Output "ERROR: No delimiter" if no delimiter => undefined

Algo:
If delimiter is undefined, return "ERROR: No delimiter"
declare stringArr to empty array object []
declare word to empty string ''
iterate index from 0 to string.length - 1
  if char at string index is delimiter
    if word.length > 0, push word into stringArr
    word = ''
  else word + string[index]
for each stringArr word
  output word to console

*/

function splitString(string, delimiter) {
  if (delimiter === undefined) console.log('ERROR: No delimiter');
  let stringArr = [];
  let word = '';
  for (let index = 0; index <= string.length - 1; index += 1) {
    if (string[index] === delimiter) {
      if (word.length > 0) stringArr.push(word);
      word = '';
    } else if (index === string.length - 1 || delimiter === '') {
      stringArr.push(word + string[index]);
    } else {
      word += string[index];
    }
  }
  stringArr.forEach(element => console.log(element));
  // for each stringArr word
  //   output word to console}
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello
