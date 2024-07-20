import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_OFFICERS, fetchOfficersSuccess, fetchOfficersFailure } from '../actions/officerActions';
import api from '../../services/api';

function* fetchOfficers() {
  try {
    const response = yield call(api.get, '/officers');
    yield put(fetchOfficersSuccess(response.data));
  } catch (error) {
    yield put(fetchOfficersFailure(error.message));
  }
}

export function* watchFetchOfficers() {
  yield takeLatest(FETCH_OFFICERS, fetchOfficers);
}
