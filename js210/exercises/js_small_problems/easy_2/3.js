function stringy(num) {
  let string = '';
  let char = '1';
  for (let count = 1; count <= num; count += 1) {
    string += char;
    char = (char === '1') ? '0' : '1';
  }
  return string;
}

console.log(stringy(6) === "101010");
console.log(stringy(9) === "101010101");
console.log(stringy(4) === "1010");
console.log(stringy(7) === "1010101");
