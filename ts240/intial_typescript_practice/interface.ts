//Please create a Car class that implements the Movable interface. Ensure the move method outputs a message to the console.

interface Movable {
  private speed: number;
  move(): void;
}

class Car implements Movable {
  speed: number;

  constructor(speed: number) {
    this.speed = speed;
  }

  move() {
    console.log(`I'm going ${this.speed} miles per hour!`);
  }
}

let myNewCar = new Car(50);
myNewCar.move();
myNewCar.speed;
