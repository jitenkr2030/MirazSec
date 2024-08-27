import { all } from 'redux-saga/effects';
import watchFetchClients from './clientSaga';

export default function* rootSaga() {
  yield all([
    watchFetchClients(),
    // Add other watcher sagas here
  ]);
}
