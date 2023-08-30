/*
declare newString as ''
if NOT times > 0 return undefined
while times > 0
  newString + string
  times -= 1

return newString

*/

function repeat(string, times) {
  let newString = '';
  if (!(times > 0)) return undefined;
  while (times > 0) {
    newString += string;
    times -= 1;
  }

  return newString;
}

console.log(repeat('abc', 1) === "abc");
console.log(repeat('abc', 2) === "abcabc");
console.log(repeat('abc', -1) === undefined);
console.log(repeat('abc', 0) === '');
console.log(repeat('abc', 'a') === undefined);
console.log(repeat('abc', false) === undefined);
console.log(repeat('abc', null) === undefined);
console.log(repeat('abc', '  ') === undefined);
