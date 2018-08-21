import React, { Component } from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import Select from './components/Select';
import WeatherTile from './components/WeatherTile';
import './app.css';

const API_KEY = '94405e6cf2cc96fb5e6cd10c101446c7';

class App extends Component {
  // The state object will contain the ID of the selected city, to forward it later
  // to the url in the API call as a city id to identify the selected city, which is null by default.
  state = {
    selectedCity: null,
  };

  // This method calls the API and get a given data from it in this state of the app.
  getDataFromApi = e => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=${API_KEY}&units=metric`,
    )
      .then(res => res.json())
      .then(json => console.log(json));
  };

  // This method handles the event when select option has changed in the form.
  // It takes the selected option's value which is the "id" key of each city from the city-list. 
  // Then it set the selectedCity in the state object to this unique ID.
  handleChange = e => {
    const cityId = e.target.value;
    console.log(cityId);
    this.setState({
      selectedCity: cityId,
    });
  };

  render() {
    return (
      <main className="background">
        <header>
          <Logo />
          <Title />
        </header>
        <Select submit={this.handleSubmit} change={this.handleChange} />
        <WeatherTile />
      </main>
    );
  }
}

export default App;
