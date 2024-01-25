function octalToDecimal(numberString) {
  let decimal = 0;
  let place = numberString.length - 1;

  let digits = numberString.split('').map((char) => Number(char));

  digits.forEach((num) => {
    decimal += num * Math.pow(8, place);
    place -= 1;
  });

  return decimal;
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9