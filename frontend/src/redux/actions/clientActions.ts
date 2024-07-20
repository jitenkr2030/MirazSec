export const FETCH_CLIENTS = 'FETCH_CLIENTS';
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CLIENTS_SUCCESS';
export const FETCH_CLIENTS_FAILURE = 'FETCH_CLIENTS_FAILURE';

export const fetchClients = () => ({
  type: FETCH_CLIENTS,
});

export const fetchClientsSuccess = (clients: any[]) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: clients,
});

export const fetchClientsFailure = (error: string) => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error,
});
