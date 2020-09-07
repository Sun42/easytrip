export const ADD_NEW_ACTIVITY = 'ADD_NEW_ACTIVITY';
export const GET_SELECTED_ACTIVITY = 'GET_SELECTED_ACTIVITY';
export const ADD_NEW_ACTIVITY_SUCCESS = 'ADD_NEW_ACTIVITY_SUCCESS';
export const ADD_NEW_ACTIVITY_ERROR = 'ADD_NEW_ACTIVITY_ERROR';
export const ADD_NAME = 'ADD_NAME';
export const ADD_DESTINATION = 'ADD_DESTINATION';
export const ADD_START_DATE = 'ADD_START_DATE';
export const ADD_END_DATE = 'ADD_END_DATE';
export const CREATE_NEW_TRAVELOGUE = 'CREATE_NEW_TRAVELOGUE';
export const CREATE_NEW_TRAVELOGUE_SUCCESS = 'CREATE_NEW_TRAVELOGUE_SUCCESS';
export const CREATE_NEW_TRAVELOGUE_ERROR = 'CREATE_NEW_TRAVELOGUE_ERROR';
export const ACTIVITY_DONE = 'ACTIVITY_DONE';
export const FAV_ACTIVITY = 'FAV_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';
export const DELETE_ACTIVITY_SUCCESSS = 'DELETE_ACTIVITY_SUCCESSS';
export const DELETE_ACTIVITY_ERROR = 'DELETE_ACTIVITY_ERROR';
export const GET_USER_ALL_TRIPS = 'GET_USER_ALL_TRIPS';
export const GET_USER_ALL_TRIPS_SUCCESS = 'GET_USER_ALL_TRIPS_SUCCESS';
export const GET_USER_ALL_TRIPS_ERROR = 'GET_USER_ALL_TRIPS_ERROR';
export const GET_TRIP_ID = 'GET_TRIP_ID';
export const GET_USER_ALL_ACTIVITIES = 'GET_USER_ALL_ACTIVITIES';
export const GET_USER_ALL_ACTIVITIES_SUCCESS = 'GET_USER_ALL_ACTIVITIES_SUCCESS';
export const GET_USER_ALL_ACTIVITIES_ERROR = 'GET_USER_ALL_ACTIVITIES_ERROR';
export const DELETE_TRAVELOGUE = 'DELETE_TRAVELOGUE';
export const DELETE_TRAVELOGUE_SUCCESS = 'DELETE_TRAVELOGUE_SUCCESS';
export const DELETE_TRAVELOGUE_ERROR = 'DELETE_TRAVELOGUE_ERROR';
export const CLOSE_POPUP = 'CLOSE_POPUP';



export const addNewActivity = (payload) => ({
  type: ADD_NEW_ACTIVITY,
  payload,
});

export const addNewActivitySuccess = () => ({
  type: ADD_NEW_ACTIVITY_SUCCESS,
});

export const addNewActivityError = () => ({
  type: ADD_NEW_ACTIVITY_ERROR,
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
  type: CREATE_NEW_TRAVELOGUE,
});

export const createNewTravelogueSuccess = () => ({
  type: CREATE_NEW_TRAVELOGUE_SUCCESS,
});

export const createNewTravelogueError = () => ({
  type: CREATE_NEW_TRAVELOGUE_ERROR,
});


export const activityDone = (payload) => ({
  type: ACTIVITY_DONE,
  payload,
});

export const favActivity = (payload) => ({
  type: FAV_ACTIVITY,
  payload,
});

export const deleteActivity = (payload) => ({
  type: DELETE_ACTIVITY,
  payload,
});

export const deleteActivitySuccess = (payload) => ({
  type: DELETE_ACTIVITY_SUCCESSS,
  payload,
});

export const deleteActivityError = (payload) => ({
  type: DELETE_ACTIVITY_ERROR,
  payload,
});

export const getUserAllTrips = () => ({
  type: GET_USER_ALL_TRIPS,
});

export const getUserAllTripsSuccess = (payload) => ({
  type: GET_USER_ALL_TRIPS_SUCCESS,
  payload,
});

export const getUserAllTripsError = (payload) => ({
  type: GET_USER_ALL_TRIPS_ERROR,
  payload,
});

export const deleteTravelogue = (payload) => ({
  type: DELETE_TRAVELOGUE,
  payload,
});

export const deleteTravelogueSuccess = () => ({
  type: DELETE_TRAVELOGUE_SUCCESS,
});

export const deleteTravelogueError = () => ({
  type: DELETE_TRAVELOGUE_ERROR,
});

export const getTripID = (payload) => ({
  type: GET_TRIP_ID,
  payload,
});

export const getUserAllActivities = (payload) => ({
  type: GET_USER_ALL_ACTIVITIES,
  payload,
});

export const getUserAllActivitiesSuccess = (payload) => ({
  type: GET_USER_ALL_ACTIVITIES_SUCCESS,
  payload,
});

export const getUserAllActivitiesError = () => ({
  type: GET_USER_ALL_ACTIVITIES_ERROR,
});

export const closePopUp = () => ({
  type: CLOSE_POPUP,
});
