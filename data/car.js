class Car {
  brand;
  model;
  speed;
  isTrunkOpen;

  constructor(carDetails) {
    this.brand = carDetails.brand;
    this.model = carDetails.model;
    this.speed = 0;
    this.isTrunkOpen = false;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model} ${this.speed} km/h`);
  }

  go() {
    if (this.isTrunkOpen === false) {
      if (this.speed < 196) {
        this.speed += 5;
      }
    }
  }

  brake() {
    if (this.speed > 4) {
      this.speed -= 5;
    }
  }

  openTrunk() {
    if (this.speed === 0) {
      if (this.isTrunkOpen === false) {
        this.isTrunkOpen = true;
      }
    }
  }

  closeTrunk() {
    if (this.isTrunkOpen === true) {
      this.isTrunkOpen = false;
    }
  }
}

class RaceCar extends Car {
  acceleration;

  constructor(carDetails) {
    super(carDetails);
    this.acceleration = carDetails.acceleration;
  }

  displayInfo() {
    console.log(`${this.brand} ${this.model} ${this.speed} km/h`);
  }

  go() {
    if (this.isTrunkOpen === false) {
      if (this.speed < 299) {
        this.speed += this.acceleration;
      }
    }
  }

  openTrunk() {
    return;
  }

  closeTrunk() {
    return;
  }
}

const raceCar = new RaceCar({
  brand: "McLaren",
  model: "F1",
  acceleration: 20,
});

raceCar.go();
raceCar.go();
raceCar.go();
raceCar.brake();
raceCar.displayInfo();

const cars = [
  { brand: "Toyota", model: "Corolla" },
  { brand: "Tesla", model: "Model 3" },
].map((carDetails) => {
  return new Car(carDetails);
});

console.log(cars);
cars[0].go();
cars[0].go();
cars[0].go();
cars[0].brake();
cars[0].displayInfo();

cars[1].go();
cars[1].go();
cars[1].go();
cars[1].brake();
cars[1].displayInfo();
