// constructor
function Shoes(size, color) {
  this.size = size;
  this.color = color;
  this.showOff = function() {
    console.log(`My shoes are ${this.color} and size ${this.size}`)
  }
};

let chucks = new Shoes('10.5', 'black');
chucks.showOff();
console.log(chucks.constructor === Shoes);
console.log(chucks.__proto__ === Shoes.prototype);
console.log(chucks.hasOwnProperty('showOff'));

let airJordans = new Shoes('13', 'white');
airJordans.showOff();
console.log(airJordans.hasOwnProperty('showOff'));
