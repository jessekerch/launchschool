// class syntax
class Shoes {
  constructor(size, color) { 
    this.size = size;
    this.color = color;
  }

  showOff() {
    console.log(`My shoes are ${this.color} and size ${this.size}`)
  }
};

let chucks = new Shoes('10.5', 'black');
chucks.showOff();
console.log(chucks.hasOwnProperty('showOff'));
console.log(chucks.hasOwnProperty('size'));

let airJordans = new Shoes('13', 'white');
airJordans.showOff();
