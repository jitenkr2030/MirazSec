import { FETCH_GUARDS, FETCH_GUARDS_SUCCESS, FETCH_GUARDS_FAILURE } from '../actions/guardActions';

const initialState = {
  guards: [],
  loading: false,
  error: null,
};

const guardReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_GUARDS:
      return { ...state, loading: true };
    case FETCH_GUARDS_SUCCESS:
      return { ...state, loading: false, guards: action.payload };
    case FETCH_GUARDS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default guardReducer;
