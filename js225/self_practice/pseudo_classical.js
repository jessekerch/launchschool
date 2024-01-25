// pseudo-classical
function Shoes(size, color) {
  this.size = size;
  this.color = color;
};

Shoes.prototype.showOff = function() {
  console.log(`My shoes are ${this.color} and size ${this.size}`)
};

let chucks = new Shoes('10.5', 'black');
chucks.showOff();

let airJordans = new Shoes('13', 'white');
airJordans.showOff();
