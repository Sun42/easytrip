import {
  GET_SEARCH, GET_SEARCH_SUBMIT, GET_SEARCH_SUBMIT_SUCCESS,
  GET_ALL_POI, GET_SEARCH_SUBMIT_SUCCESS_NAME,
  GET_SEARCH_SUBMIT_ERROR,
  TOGGLE_FOOD, TOGGLE_ART, TOGGLE_PUB, TOGGLE_EXCURSION,
  TOGGLE_SHOP, TOGGLE_ACQUATIC, TOGGLE_FUN, TOGGLE_HISTORIC,
} from '../store/action/filters-actions';

// Initial STATE de filters
export const initialState = {
  checkbox: {
    food: false,
    art: false,
    pub: false,
    excursion: false,
    shop: false,
    acquatic: false,
    fun: false,
    historic: false,
  },
  allPOI: [],
  search: '',
  searchedLocations: [],
  cordinates: [48.117266, -1.6777926],
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
    case GET_ALL_POI:
      return {
        ...state,
        allPOI: {
          ...action.payload,
        },
      };
    case GET_SEARCH_SUBMIT_SUCCESS_NAME:
      return {
        ...state,
        loading: false,
        name: action.payload,
      };
    case GET_SEARCH_SUBMIT_ERROR:
      return {
        ...state,
        loading: false,
        error: 'Nous sommes désolés mais ne n\'avons pas trouvés de résultat pour votre recherche',
      };
    case TOGGLE_FOOD:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          food: !state.checkbox.food,
        },
      };
    case TOGGLE_ART:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          art: !state.checkbox.art,
        },
      };
    case TOGGLE_PUB:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          pub: !state.checkbox.pub,
        },
      };
    case TOGGLE_EXCURSION:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          excursion: !state.checkbox.excursion,
        },
      };
    case TOGGLE_SHOP:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          shop: !state.checkbox.shop,
        },
      };
    case TOGGLE_ACQUATIC:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          acquatic: !state.checkbox.acquatic,
        },
      };
    case TOGGLE_FUN:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          fun: !state.checkbox.fun,
        },
      };
    case TOGGLE_HISTORIC:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          historic: !state.checkbox.historic,
        },
      };
    default:
      return state;
  }
};
