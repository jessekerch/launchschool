const totalPages = 364;
let energy = 100;

let currentPage = 1;
let coffeeCup = 0;
function read() {

  while (energy > 0 && currentPage < totalPages) {
    currentPage += 1;
    energy -= (5 + currentPage * 0.1);
  }

  console.log(`Made it to page ${String(currentPage)}.`);

  // Drink a cup of coffee.
  coffeeCup += 1;
  console.log(`Cup'o'coffee number ${coffeeCup}`);
  energy = 100;

  // Continue reading.
  if (currentPage < totalPages) {
    read();
  } else {
    console.log('Done!');
  }
}

read();