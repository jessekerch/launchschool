//factory function
function makeShoes(size, color) {
  return {
    size,
    color,
    showOff() {
      console.log(`My shoes are ${this.color} and size ${this.size}`)
    }
  };
}

let chucks = makeShoes('10.5', 'black');
chucks.showOff();

let airJordans = makeShoes('13', 'white');
airJordans.showOff();

