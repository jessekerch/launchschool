let myArray = [1, 2, 3, 4];
let myOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
console.log(myArray);
