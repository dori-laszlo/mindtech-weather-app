import React, { Component } from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import Select from './components/Select';
import getDataFromApi from './api/getDataFromApi';
import WeatherTile from './components/WeatherTile';
import './css/main.css';

class App extends Component {
  // The state object will contain the ID of the selected city, to forward it later
  // to the url in the API call as a city id to identify the selected city, which is null by default.
  state = {
    selectedCity: null,
    city: null,
    country: null,
    temperature: null,
    description: null,
    humidity: null,
    // This stands for to change the weatherTile visible, because it's unvisible unless we press the submit button.
    class: 'none',
  };

  // This method handles the event when select option has changed in the form.
  // It takes the selected option's value which is the "id" key of each city from the city-list.
  // Then it set the selectedCity in the state object to this unique ID.
  handleChange = e => {
    const cityId = e.target.value;
    this.setState({
      selectedCity: cityId,
    });
  };

  // This method is triggered when the form has been submitted by the submit button.
  // It calls the getDataFromApi function with the selected city's ID as a property.
  // It sets the state object to the data get from the getDataFromApi function.
  handleSubmit = e => {
    e.preventDefault();
    getDataFromApi(this.state.selectedCity).then(data =>
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        // This line sets the weatherTile component visible by changing its className.
        class: 'displayed',
      }),
    );
  };

  render() {
    return (
      <main className="background">
        <header>
          <Logo />
          <Title />
        </header>
        <Select submit={this.handleSubmit} change={this.handleChange} />
        <WeatherTile
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          humidity={this.state.humidity}
          class={this.state.class}
        />
      </main>
    );
  }
}

export default App;
