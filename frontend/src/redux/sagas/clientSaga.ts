// src/redux/sagas/clientSaga.ts
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchClientsSuccess, fetchClientsFailure } from '../actions/clientActions';
import api from '../../api';
import { SagaIterator } from 'redux-saga';
import { FETCH_CLIENTS_REQUEST } from '../actions/actionTypes';

function* fetchClients(): SagaIterator {
  try {
    const response = yield call(api.get, '/clients');
    yield put(fetchClientsSuccess(response.data));
  } catch (error) {
    yield put(fetchClientsFailure((error as Error).message));
  }
}

function* watchFetchClients() {
  yield takeLatest(FETCH_CLIENTS_REQUEST, fetchClients);
}

export default watchFetchClients;
