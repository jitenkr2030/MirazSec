import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import guardReducer from './redux/reducers/guardReducer';
import clientReducer from './redux/reducers/clientReducer';
import fieldOfficerReducer from './redux/reducers/fieldOfficerReducer';
import guardSaga from './redux/sagas/guardSaga';
import clientSaga from './redux/sagas/clientSaga';
import fieldOfficerSaga from './redux/sagas/fieldOfficerSaga';

const rootReducer = combineReducers({
  guards: guardReducer,
  clients: clientReducer,
  fieldOfficers: fieldOfficerReducer,
});

function* rootSaga() {
  yield all([
    guardSaga(),
    clientSaga(),
    fieldOfficerSaga(),
  ]);
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
