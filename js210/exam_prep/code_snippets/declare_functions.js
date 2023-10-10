// function declaration
function cityState(city, state) { 
  return city + ', ' + state;
}

// function expression
const cityState = function joinCityAndState(city, state) {
  return city + ', ' + state;
};

// arrow function
const cityState = (city, state) => city + ', ' + state;

let cityName = 'Minneapolis';
let stateAbbr = 'MN';

console.log(cityState(cityName, stateAbbr));
