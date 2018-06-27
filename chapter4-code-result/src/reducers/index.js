import { combineReducers } from 'redux';

const pokemon = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POKEMON':
      return [
        ...state,
        {
          data: action.pokemon,
        }
      ]
    default:
      return state
  }
}

export default combineReducers({
  pokemon: pokemon
});
