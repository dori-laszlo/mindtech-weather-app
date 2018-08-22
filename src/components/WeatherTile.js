import React from 'react';

// This component can display the weather data from the state of App.js via props.
const WeatherTile = props => (
  <div>
    <div className="city-name-container">
      <p id="tile-city">{props.city}</p>
      <p id="tile-country">{props.country}</p>
    </div>
    <p>{props.description}</p>
    {/* The className is coming from the state via props. On clicking the button this class turns to "displayed" */}
    <p className={props.class} id="temp">
      {props.temperature} °C
    </p>
    <p className={props.class} id="humidity">
      Humidity: {props.humidity} %
    </p>
  </div>
);

export default WeatherTile;
