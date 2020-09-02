export const ADD_NEW_ACTIVITY = 'ADD_NEW_ACTIVITY';
export const GET_SELECTED_ACTIVITY = 'GET_SELECTED_ACTIVITY';
export const ADD_NAME = 'ADD_NAME';
export const ADD_DESTINATION = 'ADD_DESTINATION';
export const ADD_START_DATE = 'ADD_START_DATE';
export const ADD_END_DATE = 'ADD_END_DATE';
export const ADD_TRIP = 'ADD_TRIP';
export const ACTIVITY_DONE = 'ACTIVITY_DONE';
export const FAV_ACTIVITY = 'FAV_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const GET_USER_ALL_TRIPS = 'GET_USER_ALL_TRIPS';


export const addNewActivity = (payload) => ({
  type: ADD_NEW_ACTIVITY,
  payload,
});

export const getSelectedActivity = (payload) => ({
  type: GET_SELECTED_ACTIVITY,
  payload,
});

export const addName = (payload) => ({
  type: ADD_NAME,
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

export const activityDone = (payload) => ({
  type: ACTIVITY_DONE,
  payload,
});

export const favActivity = (payload) => ({
  type: FAV_ACTIVITY,
  payload,
});

export const removeActivity = (payload) => ({
  type: REMOVE_ACTIVITY,
  payload,
});

export const getUserAllTrips = () => ({
  type: GET_USER_ALL_TRIPS,
});
