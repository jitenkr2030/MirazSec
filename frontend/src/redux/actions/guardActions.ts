export const FETCH_GUARDS = 'FETCH_GUARDS';
export const FETCH_GUARDS_SUCCESS = 'FETCH_GUARDS_SUCCESS';
export const FETCH_GUARDS_FAILURE = 'FETCH_GUARDS_FAILURE';

export const fetchGuards = () => ({
  type: FETCH_GUARDS,
});

export const fetchGuardsSuccess = (guards: any[]) => ({
  type: FETCH_GUARDS_SUCCESS,
  payload: guards,
});

export const fetchGuardsFailure = (error: string) => ({
  type: FETCH_GUARDS_FAILURE,
  payload: error,
});
