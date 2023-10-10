let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1); // newColors = colors = ['red', 'green', 'blue', 'purple']
updateColors(newColors, color2);
console.log(colors);
