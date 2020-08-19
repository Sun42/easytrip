import { GET_AVAIL } from '../store/action/filters-actions';
import { GET_PREF } from '../store/action/filters-actions';

// Initial STATE de l'application
export const initialState = {
  matin: false,
  midi: false,
  soir: false,
  gastronomie: false,
};

// Fonction de REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_AVAIL:
      return {
        ...state,
        matin: !state.matin,
      };
    case GET_PREF:
      return {
        ...state,
        gastronomie: !state.gastronomie,
      }
    default:
      return state;
  }
};
