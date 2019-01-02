export default class RaceCars {
  constructor() {
    this.raceCars = [];
  }


  addRaceCar(id, img, speed) {
    const car = { id, img, speed };
    this.raceCars.push(car);
    return car;
  }

  deleteRaceCar(id) {
    const index = this.raceCars.findIndex((el) => { return el.id === id; });
    this.raceCars.splice(index, 1);
  }

  isSelected(id) {
    return this.raceCars.findIndex((el) => { return el.id === id; }) !== -1;
  }

  getNumSelected() {
    return this.raceCars.length;
  }
}
