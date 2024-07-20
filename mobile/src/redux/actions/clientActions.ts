import { Dispatch } from 'redux';

export const fetchClients = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'CLIENTS_LOADING' });
  try {
    const response = await fetch('https://api.example.com/clients');
    const data = await response.json();
    dispatch({ type: 'CLIENTS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'CLIENTS_ERROR', error });
  }
};
