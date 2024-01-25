const Car = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },

  shout() {
    console.log(`I'm a ${this.make} ${this.model}.`);
  },
}

let samCar = Object.create(Car).init('Toyota', 'Sienna');
let jCar = Object.create(Car).init('Toyota', 'Camry');

samCar.shout();
jCar.shout();

// console.log(Object.getPrototypeOf(samCar) === Car);
// console.log(Car.isPrototypeOf(samCar));

console.log(Object.getPrototypeOf(samCar) === Car);

