import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Select from '../Select/Select';
import getDataFromApi from '../../utilities/getDataFromApi';
import WeatherTile from '../WeatherTile/WeatherTile';
import './App.css';

class App extends Component {
  // The state object will contain the ID of the selected city, to forward it later
  // to the url in the API call as a city id to identify the selected city, which is null by default.
  state = {
    selectedCity: 'default',
    city: null,
    country: null,
    temperature: null,
    description: null,
    humidity: null,
    // This stands for to change the weatherTile visible, because it's unvisible unless we press the submit button.
    classTile: 'tile-none',
    classSubmit: 'button-none',
    isCica: 'background',
  };

  // This method handles the event when select option has changed in the form.
  // It takes the selected option's value which is the "id" key of each city from the city-list.
  // Then it set the selectedCity in the state object to this unique ID, and the classSubmit to displayed or not displayed.
  handleChange = e => {
    const cityId = e.target.value;
    // If the submit button doesn't displayed which is the default and the selected option is not the default,
    // makes the button displayed by changing its classSubmit class is the state.
    if (
      this.state.classSubmit !== 'displayed' &&
      cityId !== 'default' &&
      cityId !== 'cica'
    ) {
      this.setState({
        selectedCity: cityId,
        classSubmit: 'button-displayed',
        isCica: 'background',
      });
      // Else leave it or make it unvisible.
    } else if (cityId === 'cica') {
      this.setState({
        isCica: 'cica',
        classSubmit: 'button-none',
        classTile: 'tile-none',
      });
    } else {
      this.setState({
        classSubmit: 'button-none',
        classTile: 'tile-none',
        isCica: 'background',
      });
    }
  };

  // This method is triggered when the form has been submitted by the submit button.
  // It calls the getDataFromApi function with the selected city's ID as a property.
  // It sets the state object to the data get from the getDataFromApi function.
  handleSubmit = e => {
    e.preventDefault();
    // It doesn't triggered when the default option is selected within the Select.
    if (this.state.selectedCity !== 'default') {
      getDataFromApi(this.state.selectedCity).then(data =>
        this.setState({
          city: data.name,
          country: data.sys.country,
          temperature: data.main.temp,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          // This line sets the weatherTile component visible by changing its className.
          classTile: 'tile-displayed',
        }),
      );
    } else {
      this.setState({
        classSubmit: 'button-none',
      });
    }
  };

  render() {
    return (
      <main className={this.state.isCica}>
        <header>
          <Logo />
          <Title />
        </header>
        <Select
          submit={this.handleSubmit}
          change={this.handleChange}
          classSubmit={this.state.classSubmit}
        />
        <WeatherTile
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          description={this.state.description}
          humidity={this.state.humidity}
          class={this.state.classTile}
        />
      </main>
    );
  }
}

export default App;

