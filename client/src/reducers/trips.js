import { slugifyNameCarnet } from '../utils';

import {
  ADD_NEW_ACTIVITY, ADD_NEW_ACTIVITY_SUCCESS, ADD_NEW_ACTIVITY_ERROR,
  GET_SELECTED_ACTIVITY, ADD_NAME, ADD_DESTINATION,
  ADD_START_DATE, ADD_END_DATE, CREATE_NEW_TRAVELOGUE, CREATE_NEW_TRAVELOGUE_SUCCESS,
  CREATE_NEW_TRAVELOGUE_ERROR,
  CHANGE_DONE_ACTIVITY, CHANGE_DONE_ACTIVITY_SUCCESS, CHANGE_DONE_ACTIVITY_ERROR,
  FAV_ACTIVITY,
  GET_USER_ALL_TRIPS, GET_USER_ALL_TRIPS_SUCCESS, GET_USER_ALL_TRIPS_ERROR,
  GET_TRIP_ID,
  GET_USER_ALL_ACTIVITIES, GET_USER_ALL_ACTIVITIES_SUCCESS, GET_USER_ALL_ACTIVITIES_ERROR,
  DELETE_TRAVELOGUE, DELETE_TRAVELOGUE_SUCCESS, DELETE_TRAVELOGUE_ERROR,
  CLOSE_POPUP,
  DELETE_ACTIVITY, DELETE_ACTIVITY_SUCCESSS, DELETE_ACTIVITY_ERROR,
} from '../store/action/trips-actions';

// Initial STATE de carnet, mon voyage et vignette
export const initialState = {
  name: '',
  destination: '',
  startDate: '',
  endDate: '',
  newCarnet: [],
  carnet: [],
  activities: [],
  selectedActivity: [],
  newActivityAddedInfo: {},
  newActivityAddedBool: false,
  newCarnetCreated: false,
  error: '',
  tripID: 0,
};

// Fonction de REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case ADD_DESTINATION:
      return {
        ...state,
        destination: action.payload,
      };
    case ADD_START_DATE:
      return {
        ...state,
        startDate: action.payload,
      };
    case ADD_END_DATE:
      return {
        ...state,
        endDate: action.payload,
      };
    case CREATE_NEW_TRAVELOGUE:
      return {
        ...state,
        newCarnet: [
          {
            name: state.name,
            destination: state.destination,
            startDate: state.startDate,
            endDate: state.endDate,
          },
        ],
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
      };
    case CREATE_NEW_TRAVELOGUE_SUCCESS:
      return {
        ...state,
        newCarnetCreated: true,
      };
    case CREATE_NEW_TRAVELOGUE_ERROR:
      return {
        ...state,
        newCarnetCreated: false,
      };
    case ADD_NEW_ACTIVITY:
      return {
        ...state,
        newActivityAddedInfo: {
          ...action.payload,
        },
      };
    case ADD_NEW_ACTIVITY_SUCCESS:
      return {
        ...state,
        newActivityAddedBool: true,
      };
    case ADD_NEW_ACTIVITY_ERROR:
      return {
        ...state,
        newActivityAddedBool: false,
      };
    case GET_SELECTED_ACTIVITY:
      return {
        ...state,
        selectedActivity: [
          {
            activity: action.payload,
          }
        ],
      };
    case CHANGE_DONE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map(activity => activity.id === action.payload ? {...activity, done: !activity.done} : activity)
      };
    case CHANGE_DONE_ACTIVITY_SUCCESS:
      return {
        ...state,
      };
    case CHANGE_DONE_ACTIVITY_ERROR:
      return {
        ...state,
      };
    case FAV_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map(activity => activity.id === action.payload ? {...activity, favori: !activity.favori} : activity)
      };
    case DELETE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(activity => activity.id !== action.payload)
      };
    case DELETE_ACTIVITY_SUCCESSS:
      return {
        ...state,
      };
    case DELETE_ACTIVITY_ERROR:
      return {
        ...state,
      };
    case GET_USER_ALL_ACTIVITIES:
      return {
        ...state,
      };
    case GET_USER_ALL_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: [
          ...action.payload,
        ],
        error: '',
      };
    case GET_USER_ALL_ACTIVITIES_ERROR:
      return {
        ...state,
        error: 'Ce carnet de voyage n\'a pas d\'activités',
        // activities: [],
      };
    case GET_USER_ALL_TRIPS: 
      return {
        ...state,
        loading: true,
      };
    case GET_USER_ALL_TRIPS_SUCCESS: 
      return {
        ...state,
        carnet: [
            ...action.payload,
        ],
        // error: '',
      };
    case GET_USER_ALL_TRIPS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Votre carnet de voyage est vide',
        // carnet: [],
      };
    case DELETE_TRAVELOGUE:
      return {
        ...state,
        //supprimer?
      };
    case DELETE_TRAVELOGUE_SUCCESS:
      return {
        ...state,
        //new carnet?
        // error: '',
      };
    case DELETE_TRAVELOGUE_ERROR:
      return {
        ...state,
        error: 'Votre carnet de voyage ne peut pas être supprimé',
      };
    case GET_TRIP_ID:
      return {
        ...state,
        tripID: action.payload,
      };
    case CLOSE_POPUP:
      return {
        ...state,
        newActivityAddedBool: false,
        newCarnetCreated: false,
      };
    default:
      return state;
  }
};

// SELECTOR 
export const getTripBySlug = (state, slug) => {
  const voyage = state.trips.carnet.find((trip) => {
    const slugifyName = slugifyNameCarnet(trip.name);
    const slugToFind = slugifyNameCarnet(slug);
    return slugifyName === slugToFind;
  });
  return voyage;
}
