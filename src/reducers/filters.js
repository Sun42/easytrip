import { GET_AVAIL } from '../store/action/filters-actions';

// Initial STATE de l'application
export const initialState = {
  matin: false,
  midi: false,
  soir: false,
};

// Fonction de REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_AVAIL:
      return {
        ...state,
        matin: true,
      };
    default:
      return state;
  }
};
