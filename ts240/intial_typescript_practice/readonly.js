//Create a function movePoint that takes a Point object, a dx value, and a dy value, and returns a new Point object with dx and dy added to its x and y coordinates.
function movePoint(point, dx, dy) {
    return {
        x: point.x + dx,
        y: point.y + dy,
    };
}
console.log(movePoint({ x: 3, y: 4 }, 2, 2));
