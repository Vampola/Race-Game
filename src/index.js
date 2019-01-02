import _ from 'lodash';
import Cars from './models/Cars';
import RaceCars from './models/RaceCars';
import * as carsView from './views/carsView';
import * as raceCarsView from './views/raceCarsView';
// @ts-ignore
import Data from './data/data.json';

console.log(Data);

const filters = {
  searchText: '',
};

const state = {};
/**
 * CAR LIST CONTROLLER
 */

const controlCarList = () => {
  // Create new car list object
  state.carList = new Cars(Data.cars);
  // Render car list
  carsView.renderCars(state.carList.Data, filters);
};

controlCarList();

// Render distance scale above tracks
carsView.distanceScale(Data);

/**
 * CARS  CONTROLLER FOR RACE
 */
const controlSelectedCar = (elem) => {
  if (!state.raceCars) state.raceCars = new RaceCars();

  const currendID = parseInt(elem.target.closest('.car-single').dataset.carid);
  const newID = state.carList.Data.findIndex(element => {return element.id == currendID});


  // car is not selected
  if (!state.raceCars.isSelected(newID)) {
  // Add car to the state
    const newRaceCar = state.raceCars.addRaceCar(
      newID,
      state.carList.Data[newID].image,
      state.carList.Data[newID].speed,
    );
    // Toggle the selected button
    
    document.querySelector(`.select${currendID}`).classList.add('selected');
    // Add car to UI list

    // car is selected
  } else {
  // Remove car from the state
  state.raceCars.deleteRaceCar(newID)
    // Toggle the selected button
    document.querySelector(`.select${currendID}`).classList.remove('selected');
  // Remove car from UI list
  }
  raceCarsView.toggleRaceField(state.raceCars.getNumSelected())

  console.log(state.raceCars);
};

/**
 * add Event Listeners
 */

document.querySelector('#search-text').addEventListener('input', (e) => {
  filters.searchText = e.target.value;
  carsView.renderCars(state.carList.Data, filters);
});

const elementsArrayClick = document.querySelectorAll('.car-single');

elementsArrayClick.forEach((elem) => {
  // elem.addEventListener('click', carsView.chooseCar);
  elem.addEventListener('click', controlSelectedCar);
  elem.addEventListener('mouseover', carsView.flipCar);
  elem.addEventListener('mouseout', carsView.flipBackCar);
});
