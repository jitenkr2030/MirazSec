// src/redux/actions/clientActions.ts
import { FETCH_CLIENTS_REQUEST, FETCH_CLIENTS_SUCCESS, FETCH_CLIENTS_FAILURE } from './actionTypes';

export const fetchClientsRequest = () => ({
  type: FETCH_CLIENTS_REQUEST,
});

export const fetchClientsSuccess = (data: any) => ({
  type: FETCH_CLIENTS_SUCCESS,
  payload: data,
});

export const fetchClientsFailure = (error: string) => ({
  type: FETCH_CLIENTS_FAILURE,
  payload: error,
});
