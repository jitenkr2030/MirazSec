import { FETCH_CLIENTS, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE } from '../actions/clientActions';

const initialState = {
  clients: [],
  loading: false,
  error: null,
};

const clientReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CLIENTS:
      return { ...state, loading: true };
    case FETCH_CLIENTS_SUCCESS:
      return { ...state, loading: false, clients: action.payload };
    case FETCH_CLIENTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default clientReducer;
