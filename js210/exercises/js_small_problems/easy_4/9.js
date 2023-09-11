const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'suv', 'motorcycle', 'car', 'truck'];

function countOccurrences(list) {
  let listed = [];
  list.forEach((outerVehicle) => {
    let count = 0;
    list.forEach(innerVehicle => {
      if (innerVehicle === outerVehicle) count += 1;
    });
    if (!listed.includes(outerVehicle)) {
      listed.push(outerVehicle);
      console.log(`${outerVehicle} => ${count}`);
    }
  });
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
// suv => 1