function stringToInteger(str) {
  let sign = 1;
  if (str[0] === '+') {
    str = str.replace('+', '');
  } else if (str[0] === '-') {
    str = str.replace('-', '');
    sign = -1;
  }

  let num = 0;
  let place = Math.pow(10, str.length - 1);
  for (let index = 0; index < str.length; index += 1) {
    num += str[index] * place;
    place /= 10;
  }
  return num * sign;
}

console.log(stringToInteger('4321'));      // 4321
console.log(stringToInteger('570'));       // 570
