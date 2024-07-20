import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_CLIENTS, fetchClientsSuccess, fetchClientsFailure } from '../actions/clientActions';
import api from '../../services/api';

function* fetchClients() {
  try {
    const response = yield call(api.get, '/clients');
    yield put(fetchClientsSuccess(response.data));
  } catch (error) {
    yield put(fetchClientsFailure(error.message));
  }
}

export function* watchFetchClients() {
  yield takeLatest(FETCH_CLIENTS, fetchClients);
}
