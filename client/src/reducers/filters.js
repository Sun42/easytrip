import {
  ADD_GASTRONOMIE, ADD_CULTURE, ADD_BAR, ADD_PROMENADE,
  ADD_SHOPPING, ADD_ACT_AQUA, GET_PREF_SPECTACLE,
  GET_SEARCH, GET_SEARCH_SUBMIT, GET_SEARCH_SUBMIT_SUCCESS,
  GET_SEARCH_SUBMIT_ERROR, GET_SEARCH_SUBMIT_SUCCESS_NAME,
  GET_PREF_MONUMENTS,
  REMOVE_GASTRONOMIE, REMOVE_CULTURE, REMOVE_BAR, REMOVE_PROMENADE,
  REMOVE_SHOPPING, REMOVE_ACT_AQUA,
} from '../store/action/filters-actions';

// Initial STATE de filters
export const initialState = {
  allFilters: {
    gastronomie: [],
    bar: [],
    culture: [],
    promenade: [],
    shopping: [],
    actaqua: [],
  },
  gastronomie: false,
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
        loading: false,
        error: 'Serched place doesnt exist',
      };
    case GET_SEARCH_SUBMIT_SUCCESS_NAME:
      return {
        ...state,
        loading: false,
        name: action.payload,
      };
    case ADD_GASTRONOMIE:
      return {
        ...state,
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
        culture: !state.culture,
        allFilters: {
          ...state.allFilters,
          culture: [],
        },
      };
    case ADD_BAR:
      return {
        ...state,
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
        bar: !state.bar,
        allFilters: {
          ...state.allFilters,
          bar: [],
        },
      };
    case ADD_PROMENADE:
      return {
        ...state,
        promenade: !state.promenade,
        allFilters: {
          ...state.allFilters,
          promenade: [
            ...action.payload,
          ],
        },
      };
    case REMOVE_PROMENADE:
      return {
        ...state,
        promenade: !state.promenade,
        allFilters: {
          ...state.allFilters,
          promenade: [],
        },
      };
    case ADD_SHOPPING:
      return {
        ...state,
        shopping: !state.shopping,
        allFilters: {
          ...state.allFilters,
          shopping: [
            ...action.payload,
          ],
        },
      };
    case REMOVE_SHOPPING:
      return {
        ...state,
        shopping: !state.shopping,
        allFilters: {
          ...state.allFilters,
          shopping: [],
        },
      };
    case ADD_ACT_AQUA:
      return {
        ...state,
        act_aqua: !state.act_aqua,
        allFilters: {
          ...state.allFilters,
          actaqua: [
            ...action.payload,
          ],
        },
      };
    case REMOVE_ACT_AQUA:
      return {
        ...state,
        actaqua: !state.actaqua,
        allFilters: {
          ...state.allFilters,
          actaqua: [],
        },
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
