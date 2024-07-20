const initialState = {
  clients: [],
  loading: false,
  error: null,
};

const clientReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CLIENTS_LOADING':
      return { ...state, loading: true };
    case 'CLIENTS_SUCCESS':
      return { ...state, loading: false, clients: action.payload };
    case 'CLIENTS_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default clientReducer;

