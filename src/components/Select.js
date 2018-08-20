import React from 'react';
import cities from '../data/city-list';

const Select = props => (
  <select id="select-city">
    <option value="">--Select a city...--</option>
    {cities.map(city => (
      <option value="">
        {city.name} ({city.country})
      </option>
    ))}
  </select>
);

export default Select;
