import React from 'react';
import PropTypes from 'prop-types';
// It needs to read the city-list file to gain the data from it dynamically into the select options.
import cities from '../../data/city-list';
import './Select.css';

// Select must be in a <form>, to have an "onSubmit" and "onChange" event, which can trigger the
// handleSubmit and handleChange methods in App.js via props.
const Select = props => (
  <form className="weather-form" onSubmit={props.submit}>
    <select className="select-city" onChange={props.change}>
      {/* The default value on this option provides that the API call doesn't triggered
    when this option is selected */}
      <option value="default">--Select a city--</option>
      {/* This part iterates on the array of the city data and gain the values from it. */}
      {cities.map(city => (
        <option value={city.id}>
          {city.name} ({city.country})
        </option>
      ))}
      <option value="cica">cica</option>
    </select>
    {/* This gets its className from the state's classSubmit value. */}
    <input
      className={props.classSubmit}
      type="submit"
      value="Find!"
      onSubmit={props.submit}
    />
  </form>
);

Select.propTypes = {
  submit: PropTypes.func.isRequired,
  change: PropTypes.func.isRequired,
  classSubmit: PropTypes.string,
};

Select.defaultProps = {
  classSubmit: 'button-none',
};

export default Select;
