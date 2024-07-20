import { call, put, takeEvery } from 'redux-saga/effects';
import apiService from '../services/apiService';

function* fetchFieldOfficers() {
  try {
    const fieldOfficers = yield call(apiService.fetchFieldOfficers);
    yield put({ type: 'FIELD_OFFICERS_SUCCESS', payload: fieldOfficers });
  } catch (error) {
    yield put({ type: 'FIELD_OFFICERS_ERROR', error });
  }
}

function* fieldOfficerSaga() {
  yield takeEvery('FETCH_FIELD_OFFICERS_REQUEST', fetchFieldOfficers);
}

export default fieldOfficerSaga;
