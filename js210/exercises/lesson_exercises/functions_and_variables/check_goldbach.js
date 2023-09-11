function isPrime(num) {
  if (num <= 1) return false;

  for (div = 2; div < num; div += 1) {
    if (num % div === 0) return false;
  }

  return true;
}

function checkGoldbach(sum) {
  if (sum < 4 || sum % 2 === 1) {
    console.log(null);
    return;
  }

  let high;
  for (let low = 2; low < sum; low += 1) {
    if (high === low) return;
    if (isPrime(low)) {
      high = sum - low;
      if (isPrime(high)) {
        console.log(low, high);
      }
    }
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53