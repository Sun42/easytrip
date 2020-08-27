import {
  ADD_GASTRONOMIE, ADD_CULTURE, ADD_BAR, GET_PREF_PROMENADE,
  GET_PREF_SHOPPING, GET_PREF_ACT_AQUA, GET_PREF_SPECTACLE,
  GET_SEARCH, GET_SEARCH_SUBMIT, GET_SEARCH_SUBMIT_SUCCESS,
  GET_SEARCH_SUBMIT_ERROR, GET_SEARCH_SUBMIT_SUCCESS_NAME,
  GET_PREF_MONUMENTS,
  REMOVE_GASTRONOMIE, REMOVE_CULTURE, REMOVE_BAR,
} from '../store/action/filters-actions';

// Initial STATE de filters
export const initialState = {
  gastronomie: false,
  allFilters: {
    gastronomie: [],
    bar: [],
    culture: [],
  },
  culture: false,
  bar: false,
  promenade: false,
  shopping: false,
  act_aqua: false,
  spectacle: false,
  monuments: false,
  allPOI: [],
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
    case ADD_GASTRONOMIE:
      return {
        ...state,
        loading: true,
        gastronomie: !state.gastronomie,
        allFilters: {
          ...state.allFilters,
          gastronomie: [
            ...action.payload,
          ],
        },
      };
    case REMOVE_GASTRONOMIE:
      return {
        ...state,
        gastronomie: !state.gastronomie,
        allFilters: {
          ...state.allFilters,
          gastronomie: [],
        },
      };
    case ADD_CULTURE:
      return {
        ...state,
        loading: true,
        culture: !state.culture,
        allFilters: {
          ...state.allFilters,
          culture: [
            ...action.payload,
          ],
        },
      };
    case REMOVE_CULTURE:
      return {
        ...state,
        gastronomie: !state.gastronomie,
        allFilters: {
          ...state.allFilters,
          culture: [],
        },
      };
    case ADD_BAR:
      return {
        ...state,
        loading: true,
        bar: !state.bar,
        allFilters: {
          ...state.allFilters,
          bar: [
            ...action.payload,
          ],
        },
      };
    case REMOVE_BAR:
      return {
        ...state,
        gastronomie: !state.gastronomie,
        allFilters: {
          ...state.allFilters,
          bar: [],
        },
      };
    case GET_PREF_PROMENADE:
      return {
        ...state,
        loading: true,
        promenade: !state.promenade,
        allPOI: [
          ...state.allPOI,
          ...action.payload,
        ],
      };
    case GET_PREF_SHOPPING:
      return {
        ...state,
        loading: true,
        shopping: !state.shopping,
        allPOI: [
          ...state.allPOI,
          ...action.payload,
        ],
      };
    case GET_PREF_ACT_AQUA:
      return {
        ...state,
        loading: true,
        act_aqua: !state.act_aqua,
        allPOI: [
          ...state.allPOI,
          ...action.payload,
        ],
      };
    case GET_PREF_SPECTACLE:
      return {
        ...state,
        loading: true,
        spectacle: !state.spectacle,
        allPOI: [
          ...state.allPOI,
          ...action.payload,
        ],
      };
    case GET_PREF_MONUMENTS:
      return {
        ...state,
        loading: true,
        monuments: !state.monuments,
        allPOI: [
          ...state.allPOI,
          ...action.payload,
        ],
      };
    default:
      return state;
  }
};
