import * as types from './types';

export const addCountry = country => ({
  type: types.ADD_COUNTRY,
  payload: country
});

export const searchCountry = country => ({
  type: types.SEARCH_COUNTRY,
  payload: country
})