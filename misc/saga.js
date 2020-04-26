// eslint-disable-next-line no-redeclare
/* global fetch */

import { all, race, call, take, delay, put, takeLatest } from 'redux-saga/effects';
import es6promise from 'es6-promise';
import Router from 'next/router';
import 'isomorphic-unfetch';

import { actionTypes, failure, loadDataSuccess, tickClock, loadDataThenNavigateSuccess } from './actions';

es6promise.polyfill();

function* runClockSaga() {
  while (true) {
    yield put(tickClock(false));
    yield delay(1000);
  }
}

function* loadDataSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(failure(err));
  }
}

function* loadDataThenNavigateSaga() {
  try {
    const res = yield fetch('https://jsonplaceholder.typicode.com/users');
    const data = yield res.json();
    yield put(loadDataThenNavigateSuccess(data));

    yield Router.push('/');
  } catch (err) {
    const message = typeof err === 'string' ? err : err.message;
    yield put(failure(message));
  }
}

function* rootSaga() {
  yield all([
    // eslint-disable-next-line func-names
    takeLatest(actionTypes.START_CLOCK, function* (...args) {
      yield race({
        task: call(runClockSaga, ...args),
        cancel: take(actionTypes.STOP_CLOCK),
      });
    }),
    takeLatest(actionTypes.LOAD_DATA, loadDataSaga),
    takeLatest(actionTypes.LOAD_DATA_THEN_NAVIGATE, loadDataThenNavigateSaga),
  ]);
}

export default rootSaga;
