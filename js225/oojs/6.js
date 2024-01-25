function UserCreator(name, points) {
  this.name = name;
  this.points = points;
}

UserCreator.prototype.add = function() {
  this.points += 1;
}

const user = new UserCreator("Ryan", 3);

// console.log(user.__proto__ === UserCreator.prototype); // true
// console.log(user.__proto__ === UserCreator); // false 
// console.log(user.constructor === UserCreator); // true
// What is user's "prototype" object? It's UserCreator.prototype

// console.log(UserCreator.prototype.__proto__ === Object.prototype); // true
// console.log(UserCreator.prototype.__proto__ === Function.prototype); // false
// console.log(UserCreator.__proto__ === Function.prototype); // true
// Where will JS keep looking up the prototypal chain? on Object.prototype NOT Function.prototype

user.add();
console.log(user.points);
