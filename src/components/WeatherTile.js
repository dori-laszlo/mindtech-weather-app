import React from 'react';

// This component can display the weather data from the state of App.js via props.
// The className of the div is coming from the state via props. On clicking the button this class turns to "displayed"

const WeatherTile = props => (
  <div className={props.class}>
    <div className="city-name-container">
      <p id="tile-city">{props.city}</p>
      <p id="tile-country">{props.country}</p>
    </div>
    <div className="weather-data">
      <p className="" id="temp">
        {props.temperature} °C
      </p>
      <p id="description">{props.description}</p>
      <p className="{props.class}" id="humidity">
        Humidity: {props.humidity} %
      </p>
    </div>
  </div>
);

export default WeatherTile;
