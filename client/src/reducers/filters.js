import {
  GET_AVAIL,
  GET_PREF_GASTRONOMIE, GET_PREF_CULTURE, GET_PREF_BAR, GET_PREF_PROMENADE,
  GET_PREF_SHOPPING, GET_PREF_ACT_AQUA, GET_PREF_SPECTACLE,
  GET_SEARCH, GET_SEARCH_SUBMIT, GET_SEARCH_SUBMIT_SUCCESS, GET_SEARCH_SUBMIT_ERROR,
} from '../store/action/filters-actions';

// Initial STATE de filters
export const initialState = {
  matin: false,
  midi: false,
  soir: false,
  gastronomie: false,
  culture: false,
  bar: false,
  promenade: false,
  shopping: false,
  act_aqua: false,
  spectacle: false,
  data: [],
  search: '',
  searchedLocations: [],
  cordinates: [51.509865, -0.118092],
  error: '',
};

// Fonction de REDUCER
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };
    case GET_SEARCH_SUBMIT:
      return {
        ...state,
        searchedLocations: [
          ...state.searchedLocations,
          {
            city: state.search,
          },
        ],
      };
    case GET_SEARCH_SUBMIT_SUCCESS:
      return {
        ...state,
        cordinates: [
          ...action.payload,
        ],
      };
    case GET_SEARCH_SUBMIT_ERROR:
      return {
        ...state,
        error: 'Serched place doesnt exist',
      };
    case GET_AVAIL:
      return {
        ...state,
        matin: !state.matin,
      };
    case GET_PREF_GASTRONOMIE:
      return {
        ...state,
        gastronomie: !state.gastronomie,
      };
    case GET_PREF_CULTURE:
      return {
        ...state,
        culture: !state.culture,
      };
    case GET_PREF_BAR:
      return {
        ...state,
        bar: !state.bar,
      };
    case GET_PREF_PROMENADE:
      return {
        ...state,
        promenade: !state.promenade,
      };
    case GET_PREF_SHOPPING:
      return {
        ...state,
        shopping: !state.shopping,
      };
    case GET_PREF_ACT_AQUA:
      return {
        ...state,
        act_aqua: !state.act_aqua,
      };
    case GET_PREF_SPECTACLE:
      return {
        ...state,
        spectacle: !state.spectacle,
      };
    default:
      return state;
  }
};
