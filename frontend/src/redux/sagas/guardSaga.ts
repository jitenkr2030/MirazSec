import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_GUARDS, fetchGuardsSuccess, fetchGuardsFailure } from '../actions/guardActions';
import api from '../../services/api';

function* fetchGuards() {
  try {
    const response = yield call(api.get, '/guards');
    yield put(fetchGuardsSuccess(response.data));
  } catch (error) {
    yield put(fetchGuardsFailure(error.message));
  }
}

export function* watchFetchGuards() {
  yield takeLatest(FETCH_GUARDS, fetchGuards);
}
