import { call, put, takeEvery } from 'redux-saga/effects';
import apiService from '../services/apiService';

function* fetchClients() {
  try {
    const clients = yield call(apiService.fetchClients);
    yield put({ type: 'CLIENTS_SUCCESS', payload: clients });
  } catch (error) {
    yield put({ type: 'CLIENTS_ERROR', error });
  }
}

function* clientSaga() {
  yield takeEvery('FETCH_CLIENTS_REQUEST', fetchClients);
}

export default clientSaga;
