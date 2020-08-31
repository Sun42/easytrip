export const ADD_GASTRONOMIE = 'ADD_GASTRONOMIE';
export const ADD_CULTURE = 'ADD_CULTURE';
export const ADD_BAR = 'ADD_BAR';
export const ADD_PROMENADE = 'ADD_PROMENADE';
export const ADD_SHOPPING = 'ADD_SHOPPING';
export const ADD_ACT_AQUA = 'ADD_ACT_AQUA';
export const GET_PREF_SPECTACLE = 'GET_PREF_SPECTACLE';
export const GET_PREF_MONUMENTS = 'GET_PREF_MONUMENTS';
export const GET_SEARCH = 'GET_SEARCH';
export const GET_SEARCH_SUBMIT = 'GET_SEARCH_SUBMIT';
export const GET_SEARCH_SUBMIT_SUCCESS = 'GET_SEARCH_SUBMIT_SUCCESS';
export const GET_SEARCH_SUBMIT_SUCCESS_NAME = 'GET_SEARCH_SUBMIT_SUCCESS_NAME';
export const GET_SEARCH_SUBMIT_ERROR = 'GET_SEARCH_SUBMIT_ERROR';
export const REMOVE_GASTRONOMIE = 'REMOVE_GASTRONOMIE';
export const REMOVE_CULTURE = 'REMOVE_CULTURE';
export const REMOVE_BAR = 'REMOVE_BAR';
export const REMOVE_PROMENADE = 'REMOVE_PROMENADE';
export const REMOVE_SHOPPING = 'REMOVE_SHOPPING';
export const REMOVE_ACT_AQUA = 'REMOVE_ACT_AQUA';

export const getSearch = (payload) => ({
  type: GET_SEARCH,
  payload,
});

export const getSearchSubmit = () => ({
  type: GET_SEARCH_SUBMIT,
});

export const getSearchSubmitSuccess = (payload) => ({
  type: GET_SEARCH_SUBMIT_SUCCESS,
  payload,
});

export const getSearchSubmitError = (payload) => ({
  type: GET_SEARCH_SUBMIT_ERROR,
  payload,
});

export const getSearchSubmitSuccessName = (payload) => ({
  type: GET_SEARCH_SUBMIT_SUCCESS_NAME,
  payload,
});

export const addGastronomie = (payload) => ({
  type: ADD_GASTRONOMIE,
  payload,
});

export const removeGastronomie = () => ({
  type: REMOVE_GASTRONOMIE,
});

export const addCulture = (payload) => ({
  type: ADD_CULTURE,
  payload,
});

export const removeCulture = () => ({
  type: REMOVE_CULTURE,
});

export const addBar = (payload) => ({
  type: ADD_BAR,
  payload,
});

export const removeBar = () => ({
  type: REMOVE_BAR,
});

export const addPromenade = (payload) => ({
  type: ADD_PROMENADE,
  payload,
});

export const removePromenade = () => ({
  type: REMOVE_PROMENADE,
});

export const addShopping = (payload) => ({
  type: ADD_SHOPPING,
  payload,
});

export const removeShopping = () => ({
  type: REMOVE_SHOPPING,
});

export const addActAqua = (payload) => ({
  type: ADD_ACT_AQUA,
  payload,
});

export const removeActAqua = () => ({
  type: REMOVE_ACT_AQUA,
});

export const getPrefSpectacle = (payload) => ({
  type: GET_PREF_SPECTACLE,
  payload,
});

export const getPrefMonuments = (payload) => ({
  type: GET_PREF_MONUMENTS,
  payload,
});
