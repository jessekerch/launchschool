function multisum(max) {
  let total = 0;
  for (let num = 1; num <= max; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) total += num;
  }
  console.log(total);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168