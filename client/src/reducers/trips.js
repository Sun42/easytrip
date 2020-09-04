import {
  ADD_NEW_ACTIVITY, ADD_NEW_ACTIVITY_SUCCESS, ADD_NEW_ACTIVITY_ERROR,
  GET_SELECTED_ACTIVITY, ADD_NAME, ADD_DESTINATION,
  ADD_START_DATE, ADD_END_DATE, CREATE_NEW_TRAVELOGUE, 
  ACTIVITY_DONE, REMOVE_ACTIVITY, FAV_ACTIVITY,
  GET_USER_ALL_TRIPS, GET_USER_ALL_TRIPS_SUCCESS, GET_USER_ALL_TRIPS_ERROR,
} from '../store/action/trips-actions';

// Initial STATE de carnet, mon voyage et vignette
export const initialState = {
  name: '',
  destination: '',
  startDate: '',
  endDate: '',
  carnet: [],
  activities: [
    {
      id: 1,
      label: 'Restaurant des deux...',
      done: false,
      favori: false,
    },
    {
      id: 2,
      label: 'Promenade...',
      done: false,
      favori: false,
    },
    {
      id: 3,
      label: 'Musée..',
      done: false,
      favori: false,
    },
    {
      id: 4,
      label: 'Pub..',
      done: false,
      favori: false,
    },
    {
      id: 5,
      label: 'Shopping..',
      done: false,
      favori: false,
    }
  ],
  selectedActivity: [],
  newActivityAdded: false,
  error: '',
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
        carnet: [
          ...state.carnet,
          {
            name: state.name,
            destination: state.destination,
            startDate: state.startDate,
            endDate: state.endDate,
          }
        ],
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
      };
    // probablement à supprimer
    case ADD_NEW_ACTIVITY:
      return {
        ...state,
      };
    case ADD_NEW_ACTIVITY_SUCCESS:
      return {
        ...state,
        newActivityAdded: true,
      };
    case ADD_NEW_ACTIVITY_ERROR:
      return {
        ...state,
        newActivityAdded: false,
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
    case ACTIVITY_DONE:
      return {
        ...state,
        activities: state.activities.map(activity => activity.id === action.payload ? {...activity, done: !activity.done} : activity)
      };
    case FAV_ACTIVITY:
      return {
        ...state,
        activities: state.activities.map(activity => activity.id === action.payload ? {...activity, favori: !activity.favori} : activity)
      };
    case REMOVE_ACTIVITY:
      return {
        ...state,
        activities: state.activities.filter(activity => activity.id !== action.payload)
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
      };
    case GET_USER_ALL_TRIPS_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Votre carnet de voyage est vide',
      };
    default:
      return state;
  }
};
