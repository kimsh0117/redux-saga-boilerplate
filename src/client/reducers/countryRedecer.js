import * as types from '../actions/types';
import initiaState from './initialState';

export default function countryReducer(state=initiaState, action) {
  switch (action.type) {
    case types.SEARCH_COUNTRY:
      return { ...state, searchedCountry: [...state.countries, action.payload] };
    default:
      return state;
  }
}