import { ADD_NEW_ACTIVITY, GET_SEARCH_RESULT_TO_STATE } from '../store/action/trips-actions';

// Initial STATE de carnet, mon voyage et vignette
export const initialState = {
  destination: 'Paris',
  result: [],
  tripBook: [],
};

// Fonction de REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SEARCH_RESULT_TO_STATE:
      return {
        ...state,
        result: [
          {
            ...action.payload,
          },
        ],
      };
    case ADD_NEW_ACTIVITY:
      return {
        ...state,
        tripBook: [
          ...state.tripBook,
          {
            name: action.playload,
          },
        ],
      };
    default:
      return state;
  }
};
