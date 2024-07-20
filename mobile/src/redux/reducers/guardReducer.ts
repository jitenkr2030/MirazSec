const initialState = {
  guards: [],
  loading: false,
  error: null,
};

const guardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GUARDS_LOADING':
      return { ...state, loading: true };
    case 'GUARDS_SUCCESS':
      return { ...state, loading: false, guards: action.payload };
    case 'GUARDS_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default guardReducer;
