export const renderCar = (car) => {
  const markup = `
          <div id="car-${car.id}" class="col-md-4 car-single" data-carid=${car.id} >
          <p class="car-name">${car.name}</p>
          <button class="select-car select${car.id}">
            <i class="fas fa-check"></i>
          </button>
          <img class="img-fluid" src="${car.image}"> 
            <div class="flip-text">
            <p class="car-speed">Speed: ${car.speed} km/h</p>
            <p class="car-description">${car.description}</p>
            </div>       
          </div>
      `;
  document.querySelector('.car-list').insertAdjacentHTML('beforeend', markup);
};

const renderScale = (scalePart) => {
  const markup = `
  <span>${scalePart}km</span>
  `;
  document.querySelector('.scale__list').insertAdjacentHTML('beforeend', markup);
};

export const distanceScale = (data) => {
  for (let i = 0; i <= data.distance; i += 5) {
    renderScale([i]);
  }
};

export const renderCars = (cars, filters) => {
  const filteredCars = cars.filter((car) => {
    return car.name.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('.car-list').innerHTML = '';

  filteredCars.forEach((car) => {
    renderCar(car);
  });
};

// click event
export const chooseCar = (e) => {
  const raceCarId = e.target.closest('.car-single').dataset.carid;

  console.log(raceCarId);
};
// mouse over event
export const flipCar = (e) => {
  const raceCarId = e.target.closest('.car-single').id;
  document.getElementById(raceCarId).classList.add('hover');

};
// mouse out event
export const flipBackCar = (e) => {
  const raceCarId = e.target.closest('.car-single').id;
  document.getElementById(raceCarId).classList.remove('hover');
};
