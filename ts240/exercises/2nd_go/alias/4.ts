(() => {

  interface Car {
    make: string;
    model: string;
    year: number;
  }

  interface Car {
    acceleration: number;
  }
  
  const myCar: Car = {
    make: 'Toyota',
    model: 'Supra',
    year: 1998,
  }

})();


