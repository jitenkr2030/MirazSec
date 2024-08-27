// src/redux/sagas/guardSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchGuardsSuccess, fetchGuardsFailure } from '../actions/guardActions';
import api from '../../api';
import { SagaIterator } from 'redux-saga';
import { FETCH_GUARDS_REQUEST } from '../actions/actionTypes';

function* fetchGuards(): SagaIterator {
  try {
    const response = yield call(api.get, '/guards');
    yield put(fetchGuardsSuccess(response.data));
  } catch (error) {
    yield put(fetchGuardsFailure((error as Error).message));
  }
}

function* watchFetchGuards() {
  yield takeLatest(FETCH_GUARDS_REQUEST, fetchGuards);
}

export default watchFetchGuards;
