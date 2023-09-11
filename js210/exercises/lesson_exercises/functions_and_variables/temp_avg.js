function average(values) {
  return Math.floor(sum(values)/values.length);
}

function sum(values) {
  total = 0;
  for (let i = 0; i < values.length; i += 1) {
    total += values[i];
  }
  return total;  
}

temps = [86, 81, 79, 81, 80, 91, 78]
console.log(average(temps));
