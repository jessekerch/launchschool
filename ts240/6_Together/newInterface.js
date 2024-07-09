function displayShapeInfo(shape) {
    var area = 'n/a';
    if ('radius' in shape) {
        area = (Math.PI * Math.pow(shape.radius, 2)).toFixed(2);
    }
    else if ('length' in shape && 'width' in shape) {
        area = (shape.length * shape.width).toFixed(1);
    }
    return "Your ".concat(shape.color, " shape's area is ").concat(area);
}
console.log(displayShapeInfo({ radius: 5, color: 'blue' }));
console.log(displayShapeInfo({ length: 10, width: 10, color: 'red' }));
// Make sure your function works correctly with both Rectangle and Circle objects.
