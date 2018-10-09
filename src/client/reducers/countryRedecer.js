import * as types from '../actions/types';
import initiaState from './initialState';

export default function countryReducer(state=initiaState, action) {
  switch (action.type) {
    case types.ADD_COUNTRY:
      return { ...state, countries: [...state.countries, action.payload] };
    default:
      return state;
  }
}