// function penultimate(string) {
//   let array = string.split(' ');
//   let word = array[array.length - 2];
//   return word;
// }

function penultimate(string) {
  return string.split(' ').slice(-2, -1)[0];
}

console.log(penultimate('last word'));                    // expected: "last"
console.log(penultimate('Launch School is great!'));      // expected: "is"
