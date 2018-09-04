import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import App from '../App/App';

// It passes the state keys to props.
function mapStateToProps(state) {
  return {
    city: state.city,
    country: state.country,
    temperature: state.temperature,
    description: state.description,
    humidity: state.humidity,
    selectedCity: state.selectedCity,
    classTile: state.classTile,
    classSubmit: state.classSubmit,
  };
}

// Passes action creators to props.
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const AppConnectToStore = connect(
  mapStateToProps,
  mapDispachToProps,
)(App);

export default AppConnectToStore;
