export const ADD_NEW_ACTIVITY = 'ADD_NEW_ACTIVITY';
export const GET_SEARCH_RESULT_TO_STATE = 'GET_SEARCH_RESULT_TO_STATE ';
export const ADD_DESTINATION = 'ADD_DESTINATION';
export const ADD_START_DATE = 'ADD_START_DATE';
export const ADD_END_DATE = 'ADD_END_DATE';
export const ADD_TRIP = 'ADD_TRIP';

export const addNewActivity = (payload) => ({
  type: ADD_NEW_ACTIVITY,
  payload,
});

export const getSearchResultToState = (payload) => ({
  type: GET_SEARCH_RESULT_TO_STATE,
  payload,
});

export const addDestination = (payload) => ({
  type: ADD_DESTINATION,
  payload,
});

export const addStartDate = (payload) => ({
  type: ADD_START_DATE,
  payload,
});

export const addEndDate = (payload) => ({
  type: ADD_END_DATE,
  payload,
});

export const addTrip = () => ({
  type: ADD_TRIP,
});