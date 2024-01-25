function CarMaker(make, model) {
  this.make = make;
  this.model = model;
}

CarMaker.prototype.shout = function() {
  console.log(`I'm a ${this.make} ${this.model}.`);
}

let samCar = new CarMaker('Toyota', 'Sienna');
let jCar = new CarMaker('Toyota', 'Camry');

samCar.shout();
jCar.shout();

console.log(Object.getPrototypeOf(samCar) === CarMaker.prototype);
console.log(samCar.constructor === CarMaker);
