import {
  ADD_NEW_ACTIVITY, ADD_NAME, ADD_DESTINATION,
  ADD_START_DATE, ADD_END_DATE, ADD_TRIP, 
  ACTIVITY_DONE, REMOVE_ACTIVITY, FAV_ACTIVITY,
} from '../store/action/trips-actions';

// Initial STATE de carnet, mon voyage et vignette
export const initialState = {
  name: '',
  destination: '',
  startDate: '',
  endDate: '',
  carnet: [
    {
      name: 'MyTrip1',
      destination: 'Paris',
      startDate: '30/12/2020', 
      endDate: '12/12/2020',
    },
    {
      name: 'MyTrip2',
      destination: 'Paris',
      startDate: '30/12/2020', 
      endDate: '12/12/2020',
    },
    {
      name: 'MyTrip3',
      destination: 'Paris',
      startDate: '30/12/2020', 
      endDate: '12/12/2020',
    },
    {
      name: 'MyTrip4',
      destination: 'Paris',
      startDate: '30/12/2020', 
      endDate: '12/12/2020',
    },
    {
      name: 'MyTrip5',
      destination: 'Paris',
      startDate: '30/12/2020', 
      endDate: '12/12/2020',
    },
  ],
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
  ]
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
    case ADD_TRIP:
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
    case ADD_NEW_ACTIVITY:
      return {
        ...state,
        activities: [
          ...state.activities,
          {
            id: 6,
            label: action.payload,
            done: false,
            favori: false,
          }
        ]
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
    default:
      return state;
  }
};
