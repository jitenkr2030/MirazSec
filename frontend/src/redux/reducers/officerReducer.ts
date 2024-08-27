// src/redux/reducers/officerReducer.ts
import { FETCH_OFFICERS_REQUEST, FETCH_OFFICERS_SUCCESS, FETCH_OFFICERS_FAILURE } from '../actions/actionTypes';

const initialState = {
  officers: [],
  loading: false,
  error: null,
};

const officerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_OFFICERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_OFFICERS_SUCCESS:
      return {
        ...state,
        loading: false,
        officers: action.payload,
      };
    case FETCH_OFFICERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default officerReducer;
