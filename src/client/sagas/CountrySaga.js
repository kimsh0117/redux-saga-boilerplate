import { put, call } from 'redux-saga/effects';
import { countrySearch } from '../Api/api';
import * as types from '../actions/types';

// Responsible for searching media library, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* searchCountrySaga({ payload }) {
  try {
    const country = yield call(countrySearch, payload);
    yield [
      put({ type: types.SEARCH_COUNTRY, country }),
    ];
  } catch (error) {
    yield put({ type: 'SEARCH_COUNTRY', error });
  }
}