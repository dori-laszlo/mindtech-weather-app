import React from 'react';
import PropTypes from 'prop-types';
import './WeatherTile.css';

// This component can display the weather data from the state of App.js via props.
// The className of the div is coming from the state via props. On clicking the button this class turns to "displayed"

const WeatherTile = props => (
  <article className={props.class}>
    <hgroup className="city-name-container">
      <h3 className="tile-city">{props.city}</h3>
      <h4 className="tile-country">{props.country}</h4>
    </hgroup>
    <section className="weather-data">
      <p className="temp">
        {props.temperature} °C
      </p>
      <p className="description">{props.description}</p>
      <p className="humidity">
        Humidity: {props.humidity} %
      </p>
    </section>
  </article>
);

WeatherTile.propTypes = {
  class: PropTypes.string,
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  humidity: PropTypes.number.isRequired,
};

WeatherTile.defaultProps = {
  class: 'tile-none',
};

export default WeatherTile;
