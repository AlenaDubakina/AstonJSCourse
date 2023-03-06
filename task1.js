const PROPERTIES = {
  DEFAULTFUEL: 5,
  SPEED: 10,
  DURABILITY: 100,
  TRACK: 200,
};

class Cars {
  constructor(name) {
    this.fuel = 0;
    this.lowFuelConsumption = 0;
    this.durability = 0;
    this.speed = 0;
    this.name = name;
  }
  improve(prop, value) {
    const points =
      this.fuel + this.lowFuelConsumption + this.durability + this.speed;
    if (points + value > 12) {
      throw new Error('Превышен лимит распределяемых очков');
    }
    this[prop] += value;
    return this;
  }

  getPowerReserve() {
    const totalFuel = PROPERTIES[DEFAULTFUEL] + this.fuel;
    return (
      totalFuel * PROPERTIES[TRACK] + totalFuel * 0,
      1 * PROPERTIES[TRACK] * this.lowFuelConsumption
    );
  }
  getSpeed() {
    return PROPERTIES[SPEED] + this.speed * 0.05 * PROPERTIES[SPEED];
  }
  getDurability() {
    return (
      PROPERTIES[DURABILITY] + this.durability * 0.1 * PROPERTIES[DURABILITY]
    );
  }
  compare(cars) {
    const maxPowerReserve = Math.max(
      ...cars.map((car) => car.getPowerReserve())
    );
    const maxSpeed = Math.max(...cars.map((car) => car.getSpeed()));
    const maxDurability = Math.max(...cars.map((car) => car.getDurability()));
    const comparisonCar = cars.map((car) => ({
      powerReserve:
        Math.round((car.getPowerReserve() / maxPowerReserve) * 100) + '%',
      durability: Math.round((car.getDurability() / maxDurability) * 100) + '%',
      speed: Math.round((car.getSpeed() / maxSpeed) * 100) + '%',
      name: car.name,
    }));
    return comparisonCar;
  }
}
class Civilian extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 2;
    this.speed = 4;
  }
}

class Sport extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 1;
    this.durability = 1;
    this.speed = 6;
  }
}

class Military extends Cars {
  constructor(name) {
    super(name);
    this.fuel = 2;
    this.lowFuelConsumption = 2;
    this.durability = 4;
    this.speed = 2;
  }
}
const carsTypes = [Civilian, Sport, Military]; // список типов автомобилей

function createRandomCar(name) {
  const carType = carsTypes[Math.floor(Math.random() * carsTypes.length)];
  return new carType(name);
}
