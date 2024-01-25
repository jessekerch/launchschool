// oolo

const Shoes = {
  init(size, color) {
    this.size = size;
    this.color = color;
  },

  showOff() {
    console.log(`My shoes are ${this.color} and size ${this.size}`)
  },
};

let chucks = Object.create(Shoes)
chucks.init('10.5', 'black');
chucks.showOff();
console.log(chucks.hasOwnProperty('showOff'));
console.log(chucks.hasOwnProperty('size'));

let airJordans = Object.create(Shoes)
airJordans.init('13', 'white');
airJordans.showOff();
console.log(airJordans.hasOwnProperty('showOff'));
