// src/redux/reducers/rootReducer.ts
import { combineReducers } from 'redux';
import officerReducer from './officerReducer';
// import other reducers...

const rootReducer = combineReducers({
  officers: officerReducer,
  // other reducers...
});

export default rootReducer;
