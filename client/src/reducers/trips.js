import {
  ADD_NEW_ACTIVITY, GET_SEARCH_RESULT_TO_STATE,
  ADD_DESTINATION, ADD_START_DATE, ADD_END_DATE, ADD_TRIP,
} from '../store/action/trips-actions';

// Initial STATE de carnet, mon voyage et vignette
export const initialState = {
  destination: '',
  startDate: '',
  endDate: '',
  result: [],
  carnet: [],
  newTrip: [],
};

// Fonction de REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
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
        newTrip: [
          {
            destination: state.destination,
          },
          {
            startDate: state.startDate,
          },
          {
            endDate: state.endDate,
          },
        ],
        destination: '',
        startDate: '',
        endDate: '',
      };

    case GET_SEARCH_RESULT_TO_STATE:
      return {
        ...state,
        result: [
          ...action.payload,
        ],
      };
    case ADD_NEW_ACTIVITY:
      return {
        ...state,
        carnet: [
          ...state.carnet,
          {
            name: action.playload,
          },
        ],
      };
    default:
      return state;
  }
};
