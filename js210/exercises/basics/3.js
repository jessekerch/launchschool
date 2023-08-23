const myName = 'Bob';
const saveName = myName;
myName.toUpperCase(); // primitive strings are immutable
console.log(myName, saveName); // => Bob Bob

console.log(myName.toUpperCase()); // => BOB

