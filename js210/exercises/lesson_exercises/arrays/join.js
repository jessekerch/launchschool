function join(array, separator) {
  joinedString = '';
  for (let idx = 0; idx < array.length; idx += 1) {
    joinedString += String(array[idx]);
    if (idx < array.length - 1) joinedString += separator;
  }

  return joinedString;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'
