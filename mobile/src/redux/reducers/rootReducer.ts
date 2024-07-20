import { combineReducers } from 'redux';
import guardReducer from './guardReducer';
import clientReducer from './clientReducer';
import officerReducer from './officerReducer';

const rootReducer = combineReducers({
  guard: guardReducer,
  client: clientReducer,
  officer: officerReducer,
});

export default rootReducer;
