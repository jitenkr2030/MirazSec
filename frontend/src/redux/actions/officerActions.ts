// src/redux/actions/officerActions.ts
import { FETCH_OFFICERS_REQUEST, FETCH_OFFICERS_SUCCESS, FETCH_OFFICERS_FAILURE } from './actionTypes';

export const fetchOfficersRequest = () => ({
  type: FETCH_OFFICERS_REQUEST,
});

export const fetchOfficersSuccess = (data: any) => ({
  type: FETCH_OFFICERS_SUCCESS,
  payload: data,
});

export const fetchOfficersFailure = (error: string) => ({
  type: FETCH_OFFICERS_FAILURE,
  payload: error,
});
