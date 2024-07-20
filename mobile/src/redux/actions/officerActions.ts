import { Dispatch } from 'redux';

export const fetchFieldOfficers = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'FIELD_OFFICERS_LOADING' });
  try {
    const response = await fetch('https://api.example.com/fieldOfficers');
    const data = await response.json();
    dispatch({ type: 'FIELD_OFFICERS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'FIELD_OFFICERS_ERROR', error });
  }
};
