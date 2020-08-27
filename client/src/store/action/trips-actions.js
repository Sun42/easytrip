export const ADD_NEW_ACTIVITY = 'ADD_NEW_ACTIVITY';
export const GET_SEARCH_RESULT_TO_STATE = 'GET_SEARCH_RESULT_TO_STATE ';

export const addNewActivity = (payload) => ({
  type: ADD_NEW_ACTIVITY,
  payload,
});

export const getSearchResultToState = (payload) => ({
  type: GET_SEARCH_RESULT_TO_STATE,
  payload,
});
