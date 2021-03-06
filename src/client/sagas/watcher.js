import { takeLatest } from 'redux-saga/effects';
import { searchCountrySaga } from './CountrySaga';
import * as types from '../actions/types';

export default function* watchSearchCountry() {
  yield takeLatest(types.SEARCH_COUNTRY, searchCountrySaga);
}