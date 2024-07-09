//Create a function movePoint that takes a Point object, a dx value, and a dy value, and returns a new Point object with dx and dy added to its x and y coordinates.

//For example, calling movePoint({x: 3, y: 4}, 2, 2) should return a Point object with x as 5 and y as 6.

interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  return {
    x: point.x + dx,
    y: point.y + dy,
  }
}

console.log(movePoint({x: 3, y: 4}, 2, 2));