// This isn't the final reducer obviously... The main concept to this
// reducer was to apply the original handleChange method of App component,
// but instead of setState, return a new state in the store.
// But unfortunatelly i didn't find out yet, how to pass it the event value via the action...
// My concept was the action has to know the event's target.value what it got when the selected option has changed.

function selectCity(state = [], action) {
  switch (action.type) {
    case 'CHANGE_SELECTED_OPTION':
      if (
        state.classSubmit !== 'displayed' &&
        action.cityId !== 'default' &&
        action.cityId !== 'cica'
      ) {
        return [
          ...state,
          {
            selectedCity: action.cityId,
            classSubmit: 'button-displayed',
            isCica: 'background',
          },
        ];
      } else if (action.cityId === 'cica') {
        return [
          ...state,
          {
            classSubmit: 'button-none',
            isCica: 'cica',
          },
        ];
      } else {
        return [
          ...state,
          {
            classSubmit: 'button-none',
            classTile: 'tile-none',
            isCica: 'background',
          },
        ];
      }
    default:
      return state;
  }
}

export default selectCity;
