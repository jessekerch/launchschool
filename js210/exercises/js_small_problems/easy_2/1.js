function crunch(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx] !== string[idx + 1]) {
      newString += string[idx];
    }
  }
  return newString;
}

console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");
console.log(crunch('4444abcabccba') === "4abcabcba");
console.log(crunch('ggggggggggggggg') === "g");
console.log(crunch('a') === "a");
console.log(crunch('') === "");