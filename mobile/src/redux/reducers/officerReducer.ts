const initialState = {
  fieldOfficers: [],
  loading: false,
  error: null,
};

const fieldOfficerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FIELD_OFFICERS_LOADING':
      return { ...state, loading: true };
    case 'FIELD_OFFICERS_SUCCESS':
      return { ...state, loading: false, fieldOfficers: action.payload };
    case 'FIELD_OFFICERS_ERROR':
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default fieldOfficerReducer;

