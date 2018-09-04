// This dispatched when the selected option has changed in the selector.
// It should triggers selectCity reducer.
export function changeOption(cityId) {
  return {
    type: 'CHANGE_SELECTED_OPTION',
    cityId,
  };
}

// This dispatched when the submit button has pressed.
// It should triggers the fetchWeather reducer.
export function submit(cityId) {
  return {
    type: 'GET_WEATHER',
    cityId,
  };
}
