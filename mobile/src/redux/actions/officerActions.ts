export const FETCH_OFFICERS = 'FETCH_OFFICERS';
export const FETCH_OFFICERS_SUCCESS = 'FETCH_OFFICERS_SUCCESS';
export const FETCH_OFFICERS_FAILURE = 'FETCH_OFFICERS_FAILURE';

export const fetchOfficers = () => ({
  type: FETCH_OFFICERS,
});

export const fetchOfficersSuccess = (officers: any[]) => ({
  type: FETCH_OFFICERS_SUCCESS,
  payload: officers,
});

export const fetchOfficersFailure = (error: string) => ({
  type: FETCH_OFFICERS_FAILURE,
  payload: error,
});
