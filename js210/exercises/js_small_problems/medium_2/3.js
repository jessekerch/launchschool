function triangle(a, b, c) {
  if ([a, b, c].reduce((sum, val) => sum + val) !== 180) return 'invalid';
  if ([a, b, c].some(val => val <= 0)) return 'invalid';
  if ([a, b, c].some(val => val === 90)) return 'right';
  if ([a, b, c].some(val => val > 90)) return 'obtuse';
  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
