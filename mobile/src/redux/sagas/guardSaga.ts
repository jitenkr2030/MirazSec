import { call, put, takeEvery } from 'redux-saga/effects';
import apiService from '../services/apiService';

function* fetchGuards() {
  try {
    const guards = yield call(apiService.fetchGuards);
    yield put({ type: 'GUARDS_SUCCESS', payload: guards });
  } catch (error) {
    yield put({ type: 'GUARDS_ERROR', error });
  }
}

function* guardSaga() {
  yield takeEvery('FETCH_GUARDS_REQUEST', fetchGuards);
}

export default guardSaga;
