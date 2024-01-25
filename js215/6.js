let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(rectangles) {
  let areas = rectangles.map(([height, width]) => height * width);
  let totalArea = areas.reduce((sum, area) => sum + area);
  return totalArea;
}

console.log(totalArea(rectangles));    // 141
