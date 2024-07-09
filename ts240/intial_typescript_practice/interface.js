//Please create a Car class that implements the Movable interface. Ensure the move method outputs a message to the console.
var Car = /** @class */ (function () {
    function Car(speed) {
        this.speed = speed;
    }
    Car.prototype.move = function () {
        console.log("I'm going ".concat(this.speed, " miles per hour!"));
    };
    return Car;
}());
var myNewCar = new Car(50);
myNewCar.move();
myNewCar.speed;
