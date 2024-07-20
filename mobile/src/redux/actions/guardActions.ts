import { Dispatch } from 'redux';

export const fetchGuards = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'GUARDS_LOADING' });
  try {
    const response = await fetch('https://api.example.com/guards');
    const data = await response.json();
    dispatch({ type: 'GUARDS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'GUARDS_ERROR', error });
  }
};
