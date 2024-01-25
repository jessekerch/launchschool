let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalSquareArea(rectangles) {
  let squares = rectangles.filter(([height, width]) => height === width);
  let areas = squares.map(([height, width]) => height * width);
  let totalArea = areas.reduce((sum, area) => sum + area);
  return totalArea;
}

console.log(totalSquareArea(rectangles));    // 121