import {
  GET_SEARCH, GET_SEARCH_SUBMIT, GET_SEARCH_SUBMIT_SUCCESS,
  GET_ALL_POI, GET_SEARCH_SUBMIT_SUCCESS_NAME,
  GET_SEARCH_SUBMIT_ERROR,
  ADD_FOOD, ADD_ART, ADD_PUB, ADD_EXCURSION,
  ADD_SHOP, ADD_ACQUATIC, ADD_FUN, ADD_HISTORIC,
  REMOVE_FOOD, REMOVE_ART, REMOVE_PUB, REMOVE_EXCURSION,
  REMOVE_SHOP, REMOVE_ACQUATIC, REMOVE_FUN, REMOVE_HISTORIC,
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
    case ADD_FOOD:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          food: !state.checkbox.food,
        },
      };
    case REMOVE_FOOD:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          food: !state.checkbox.food,
        },
      };
    case ADD_ART:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          art: !state.checkbox.art,
        },
      };
    case REMOVE_ART:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          art: !state.checkbox.art,
        },
      };
    case ADD_PUB:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          pub: !state.checkbox.pub,
        },
      };
    case REMOVE_PUB:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          pub: !state.checkbox.pub,
        },
      };
    case ADD_EXCURSION:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          excursion: !state.checkbox.excursion,
        },
      };
    case REMOVE_EXCURSION:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          excursion: !state.checkbox.excursion,
        },
      };
    case ADD_SHOP:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          shop: !state.checkbox.shop,
        },
      };
    case REMOVE_SHOP:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          shop: !state.checkbox.shop,
        },
      };
    case ADD_ACQUATIC:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          acquatic: !state.checkbox.acquatic,
        },
      };
    case REMOVE_ACQUATIC:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          acquatic: !state.checkbox.acquatic,
        },
      };
    case ADD_FUN:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          fun: !state.checkbox.fun,
        },
      };
    case REMOVE_FUN:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          fun: !state.checkbox.fun,
        },
      };
    case ADD_HISTORIC:
      return {
        ...state,
        checkbox: {
          ...state.checkbox,
          historic: !state.checkbox.historic,
        },
      };
    case REMOVE_HISTORIC:
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
