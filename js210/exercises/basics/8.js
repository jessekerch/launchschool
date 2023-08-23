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

function stringToSignedInteger(str) {
  switch (str[0]) {
    case '-':
      num =  stringToInteger(str.slice(1));
      return num * -1;
    case '+': return stringToInteger(str.slice(1));
    default: return stringToInteger(str);
  }
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100
