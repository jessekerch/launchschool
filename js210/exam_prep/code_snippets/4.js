let x = 1;

if (function f() {}) {
  function f() {};
  x += typeof f;
}

console.log(x);
