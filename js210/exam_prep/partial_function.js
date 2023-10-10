const BEV_TYPES = ['soda', 'sparkling water', 'tea'];
const COLORS = ['black', 'blue', 'red'];
const BERRIES = ['cherries', 'raspberries', 'cloudberries'];

let randType = BEV_TYPES[Math.floor(Math.random() * 3)];
let randColor = COLORS[Math.floor(Math.random() * 3)];
let randBerry = BERRIES[Math.floor(Math.random() * 3)];

function brew(type, color, berry) {
  return `${type} with ${color} ${berry} `;
}

function createBev(type) {
  return function(color, berry) {
    return brew(type, color, berry);
  };
}

const createSoda = createBev('soda');

// console.log(brew(randType, randColor, randBerry)); =Original replaced by PFA

console.log(createSoda(randColor, randBerry));
