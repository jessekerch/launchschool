const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let string = '';
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    string = DIGITS[remainder] + string;
  } while (number > 0);
  
  return string || '0';
}

function signedIntegerToString(num) {
  if (num < 0) {
    return ('-' + integerToString(-num));
  } else if (num > 0) {
    return ('+' + integerToString(num));
  } else {
    return integerToString(num);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");
console.log(signedIntegerToString(-0) === "-0");
