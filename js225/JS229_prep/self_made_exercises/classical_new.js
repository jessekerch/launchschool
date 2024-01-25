function Car(make, model) {
  if (!make || !model) {
    return 'The car needs both a make and a model please';
  }

  this.make = make;
  this.model = model;
  this.speak = function() {
    console.log(this.make + ' ' + this.model + ' ' + 'says beep!');
  };
}

let myCar = new Car('Volvo', '240');
console.log(myCar instanceof Car); // ?
myCar.speak(); // ?

let anotherCar = new Car('Daihatsu');
console.log(anotherCar instanceof Car); // ?
anotherCar.speak(); // ?
