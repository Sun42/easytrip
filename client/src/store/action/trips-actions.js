export const ADD_NEW_ACTIVITY = 'ADD_NEW_ACTIVITY';
export const GET_SEARCH_RESULT_TO_STATE = 'GET_SEARCH_RESULT_TO_STATE ';

export const addNewActivity = () => ({
  type: ADD_NEW_ACTIVITY,
});

export const getSearchResultToState = (payload) => ({
  type: GET_SEARCH_RESULT_TO_STATE,
  payload,
});
