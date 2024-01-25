function makeCar(accelRate, brakeRate) {
  return {
    speed: 0,
    accelRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelRate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

let hatchback = makeCar(9, 7);
hatchback.accelerate();
hatchback.brake();
console.log(hatchback);
