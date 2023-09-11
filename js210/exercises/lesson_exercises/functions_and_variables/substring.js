function substr(string, start, length) {
  start = start >= 0 ? start : (string.length + start);
  let finish = start + length - 1;
  let subString = '';
  for (let idx = start; idx <= finish; idx += 1) {
    char = string[idx] || '';
    subString += char;
  }
  console.log(subString);
}

let string = 'hello world';

substr(string, 2, 4);      // "llo "
substr(string, -3, 2);     // "rl"
substr(string, 8, 20);     // "rld"
substr(string, 0, -20);    // ""
substr(string, 0, 0);      // ""