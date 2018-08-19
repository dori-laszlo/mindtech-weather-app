import React, { Component } from 'react';
import Logo from './components/Logo';
import Title from './components/Title';
import Select from './components/Select';
import WeatherTile from './components/WeatherTile';
import './app.css';

class App extends Component {
  render() {
    return (
      <main className='background'>
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
