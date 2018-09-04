import { combineReducers } from 'redux';
import fetchWeather from './fetchWeather';
import selectCity from './selectCity';

const rootReducer = combineReducers({ fetchWeather, selectCity });

export default rootReducer;
