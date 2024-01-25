function gcd(x, y, div=Math.max(x, y)) {
  if ( x % div === 0 && y % div === 0) {
    return div;
  }

  return gcd(x, y, div - 1);
}

console.log(gcd(24, 144));
