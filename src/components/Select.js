import React from 'react';
import cities from '../data/city-list';

// Select must be in a form, to have an "onSubmit" event, which can give to the App component
// the "getWeather" props, can call the getDataFromApi methon in the App component which is the API call itself.
const Select = props => (
  <form onSubmit={props.getWeather}>
    <select id="select-city">
      <option value="">--Select a city...--</option>
      {cities.map(city => (
        <option value="">
          {city.name} ({city.country})
        </option>
      ))}
    </select>
    <input type="submit" value="Find!" />
  </form>
);

export default Select;
