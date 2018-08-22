import React from 'react';
// It needs to read the city-list file to gain the data from it dynamically into the select options.
import cities from '../data/city-list';

// Select must be in a <form>, to have an "onSubmit" and "onChange" event, which can trigger the
// handleSubmit and handleChange methods in App.js via props.
const Select = props => (
  <form onSubmit={props.submit}>
    <select id="select-city" onChange={props.change}>
      <option value="">--Select a city--</option>
      {/* This part iterates on the array of the city data and gain the values from it. */}
      {cities.map(city => (
        <option value={city.id}>
          {city.name} ({city.country})
        </option>
      ))}
    </select>
    <input type="submit" value="Find!" onSubmit={this.submit} />
  </form>
);

export default Select;
