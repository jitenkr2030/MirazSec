// src/redux/sagas/officerSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchOfficersSuccess, fetchOfficersFailure } from '../actions/officerActions';
import api from '../../api';
import { SagaIterator } from 'redux-saga';
import { FETCH_OFFICERS_REQUEST } from '../actions/actionTypes';

function* fetchOfficers(): SagaIterator {
  try {
    const response = yield call(api.get, '/officers');
    yield put(fetchOfficersSuccess(response.data));
  } catch (error) {
    yield put(fetchOfficersFailure((error as Error).message));
  }
}

function* watchFetchOfficers() {
  yield takeLatest(FETCH_OFFICERS_REQUEST, fetchOfficers);
}

export default watchFetchOfficers;
