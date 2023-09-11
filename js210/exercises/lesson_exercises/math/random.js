function randomInt(min, max) {
  if (min > max) [min, max] = [max, min];
  let rando = Math.ceil(Math.random() * (max - min) + min);
  return rando;
}

console.log(randomInt(1, 100));
console.log(randomInt(900, 1000));
console.log(randomInt(100, 1));
console.log(randomInt(1, 1));
