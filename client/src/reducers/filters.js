import {
  GET_PREF_GASTRONOMIE, GET_PREF_CULTURE, GET_PREF_BAR, GET_PREF_PROMENADE,
  GET_PREF_SHOPPING, GET_PREF_ACT_AQUA, GET_PREF_SPECTACLE,
  GET_SEARCH, GET_SEARCH_SUBMIT, GET_SEARCH_SUBMIT_SUCCESS,
  GET_SEARCH_SUBMIT_ERROR, GET_SEARCH_SUBMIT_SUCCESS_NAME,
  GET_PREF_MONUMENTS, GET_FILTER_GASTRONOMIE_TO_STATE, GET_FILTER_CULTURE_TO_STATE,
} from '../store/action/filters-actions';

// Initial STATE de filters
export const initialState = {
  gastronomie: false,
  gastronomieFilter: [],
  culture: false,
  cultureFilter: [],
  bar: false,
  promenade: false,
  shopping: false,
  act_aqua: false,
  spectacle: false,
  monuments: false,
  search: '',
  searchedLocations: [],
  cordinates: [51.509865, -0.118092],
  error: '',
  name: 'London',
  loading: false,
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
        loading: true,
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
        loading: false,
        cordinates: [
          ...action.payload,
        ],
      };
    case GET_SEARCH_SUBMIT_ERROR:
      return {
        ...state,
        error: 'Serched place doesnt exist',
      };
    case GET_SEARCH_SUBMIT_SUCCESS_NAME:
      return {
        ...state,
        name: action.payload,
      };
    case GET_PREF_GASTRONOMIE:
      return {
        ...state,
        gastronomie: !state.gastronomie,
      };
    case GET_FILTER_GASTRONOMIE_TO_STATE:
      return {
        ...state,
        gastronomieFilter: [
          ...action.payload,
        ],
      };
    case GET_PREF_CULTURE:
      return {
        ...state,
        culture: !state.culture,
      };
    case GET_FILTER_CULTURE_TO_STATE:
      return {
        ...state,
        cultureFilter: [
          ...action.payload,
        ],
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
    case GET_PREF_MONUMENTS:
      return {
        ...state,
        monuments: !state.monuments,
      };
    default:
      return state;
  }
};
