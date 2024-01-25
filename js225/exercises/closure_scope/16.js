function countdown(start) {
  (function counter(n) {
    console.log(n);
    if (n === 0) {
      console.log('Done!');
    } else {
      counter(n - 1);
    }
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