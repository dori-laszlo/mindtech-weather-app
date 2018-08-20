import React, { Component } from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import Select from './components/Select';
import WeatherTile from './components/WeatherTile';
import './app.css';

const API_KEY = '94405e6cf2cc96fb5e6cd10c101446c7';

class App extends Component {
  // This method calls the API and get a given data from it in this state of the app.
  getDataFromApi = (e) => {
    console.log(e);
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${API_KEY}&units=metric`,
    )
      .then(res => res.json())
      .then(json => console.log(json));
  };

  render() {
    return (
      <main className="background">
        <header>
          <Logo />
          <Title />
        </header>
        <Select getWeather={this.getDataFromApi}/>
        <WeatherTile />
      </main>
    );
  }
}

export default App;
