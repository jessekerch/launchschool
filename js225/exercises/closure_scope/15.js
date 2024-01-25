function countdown(start) {
  (function (n) {
    for (num = start; num >= 0; num -= 1) {
      console.log(num);
    }
    console.log('Done!');
  })(start);
}

countdown(7);
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0
// Done!