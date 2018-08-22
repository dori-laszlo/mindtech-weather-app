import React, { Component } from 'react';
import Logo from './components/Logo/Logo';
import Title from './components/Title/Title';
import Select from './components/Select/Select';
import getDataFromApi from './utilities/getDataFromApi';
import WeatherTile from './components/WeatherTile/WeatherTile';
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
    class: 'none',
    idSubmit: 'button-none',
  };

  // This method handles the event when select option has changed in the form.
  // It takes the selected option's value which is the "id" key of each city from the city-list.
  // Then it set the selectedCity in the state object to this unique ID, and the idSubmit to displayed or not displayed.
  handleChange = e => {
    const cityId = e.target.value;
    // If the submit button doesn't displayed which is the default and the selected option is not the default,
    // makes the button displayed by changing its idSubmit class is the state.
    if (this.state.idSubmit !== 'displayed' && cityId !== 'default') {
      this.setState({
        selectedCity: cityId,
        idSubmit: 'button-displayed',
      });
      // Else leave it or make it unvisible.
    } else {
      this.setState({
        idSubmit: 'button-none',
        class: 'none',
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
          class: 'displayed',
        }),
      );
    } else {
      this.setState({
        idSubmit: 'button-none',
      });
    }
  };

  render() {
    return (
      <main className="background">
        <header>
          <Logo />
          <Title />
        </header>
        <Select
          submit={this.handleSubmit}
          change={this.handleChange}
          idSubmit={this.state.idSubmit}
        />
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
