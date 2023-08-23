let myVar = [1];

function myFunc(myVar) {
  console.log(JSON.stringify(myVar));
  myVar[0] = 2;
  console.log(JSON.stringify(myVar));
}

myFunc(myVar);
console.log(myVar); // [2]

console.log(JSON.stringify(myVar));
