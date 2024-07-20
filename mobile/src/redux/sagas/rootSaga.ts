import { all } from 'redux-saga/effects';
import { watchFetchGuards } from './guardSaga';
import { watchFetchClients } from './clientSaga';
import { watchFetchOfficers } from './officerSaga';

export default function* rootSaga() {
  yield all([
    watchFetchGuards(),
    watchFetchClients(),
    watchFetchOfficers(),
  ]);
}
