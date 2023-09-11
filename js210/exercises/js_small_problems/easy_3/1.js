function teddyHBD(min, max) {
  age = Math.round(Math.random() * (max - min + 1) + min);
  console.log(`Teddy is ${age} years old!`);
}

teddyHBD(20, 200);
