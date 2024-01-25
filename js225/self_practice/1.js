let CarMaker = (function() {
  let cars = [];
  let carMake;
  let carModel;
	// private data
	// private functions
	let newObj = {
		// object properties
		init(makeArg, modelArg) {
      carMake = makeArg;
      carModel = modelArg;
      return this;
    },

		// include functions
    shout() {
      console.log(`I'm a ${carMake} ${carModel}`)
    },

    allShout() {
      console.log(cars);
    },
	};
  cars.push(carMake + ' ' + carModel);
  return newObj;
})(); // IIFE using the ()(); syntax for immediate invocation

let samCar = Object.create(CarMaker).init('Toyota', 'Sienna');
samCar.shout();

let jCar = Object.create(CarMaker).init('Toyota', 'Camry');
jCar.shout();
samCar.shout();
samCar.allShout();
