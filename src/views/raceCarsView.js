export const toggleRaceField = (numSelected) => {
  document.querySelector('.track-fields').style.visibility = numSelected > 0 ? 'visible' : 'hidden';
};
