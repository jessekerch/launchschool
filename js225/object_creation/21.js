"use strict";

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  Dog.allDogs.push(this);
}

Dog.allDogs = [];
let max = new Dog('Maxi', 'Chihuahua', 28);
console.log(Dog.allDogs);
