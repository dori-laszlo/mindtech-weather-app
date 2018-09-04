import getDataFromApi from '../utilities/getDataFromApi';

// The concept behind tis reducer was the same as at the selectCity reducer: Reuse 
// the original handleSubmit method as a reducer.

function fetchWeather(state = [], action) {
  switch (action.type) {
    case 'GET_WEATHER':
    if (state.selectedCity !== 'default') {
      getDataFromApi(state.selectedCity).then(data =>
        return [
        {
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          classTile: 'tile-displayed',
        },
        ...state,
        ]
      );
    } else {
      return [
        {
          classSubmit: 'button-none',
        },
        ...state,
        ]
    }
    default:
      return state;
  }
}

export default fetchWeather;
