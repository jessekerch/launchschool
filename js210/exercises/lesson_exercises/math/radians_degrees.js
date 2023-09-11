function convertToDegrees(radian_angle) {
  let degrees = radian_angle * 180 / Math.PI;
  return parseInt(degrees, 10);
}

console.log(convertToDegrees(2));
console.log(convertToDegrees(1));
console.log(convertToDegrees(3.1416));
