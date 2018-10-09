import { fork } from 'redux-saga/effects';
import watchSearchCountry from './watcher';

export default function* startForman() {
  yield fork(watchSearchCountry);
}