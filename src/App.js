import React, { Component } from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import Select from './components/Select';
import WeatherTile from './components/WeatherTile';
import './app.css';

const API_KEY = '94405e6cf2cc96fb5e6cd10c101446c7';

class App extends Component {
  //I just tested here if the API call works, with logging a given city data to the console when the component mounted.
  componentDidMount() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Budapest,hu&appid=${API_KEY}&units=metric`,
    )
      .then(res => res.json())
      .then(json => console.log(json));
  }

  render() {
    return (
      <main className="background">
        <header>
          <Logo />
          <Title />
        </header>
        <Select />
        <WeatherTile />
      </main>
    );
  }
}

export default App;
