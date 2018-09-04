import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';

// Sets the default state of the store.
const defaultState = {
  city: null,
  country: null,
  temperature: null,
  description: null,
  humidity: null,
  selectedCity: 'default',
  classTile: 'tile-none',
  classSubmit: 'button-none',
  isCica: 'background',
};

// Create the store with the given default state.
const store = createStore(rootReducer, defaultState, composeWithDevTools());

// It makes the hotloading work on Redux.
if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
