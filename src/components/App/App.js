import React from 'react';
import Logo from '../Logo/Logo';
import Title from '../Title/Title';
import Select from '../Select/Select';
import WeatherTile from '../WeatherTile/WeatherTile';
import './App.css';

// This one functional component contains the others.
const App = props => {
  <main>
    <header>
      <Logo />
      <Title />
    </header>
    <Select />
    <WeatherTile />
  </main>;
};

export default App;
