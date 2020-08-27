export const ADD_GASTRONOMIE = 'ADD_GASTRONOMIE';
export const ADD_CULTURE = 'ADD_CULTURE';
export const ADD_BAR = 'ADD_BAR';
export const GET_PREF_PROMENADE = 'GET_PREF_PROMENADE';
export const GET_PREF_SHOPPING = 'GET_PREF_SHOPPING';
export const GET_PREF_ACT_AQUA = 'GET_PREF_ACT_AQUA';
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

export const removeGastronomie = (payload) => ({
  type: REMOVE_GASTRONOMIE,
  payload,
});

export const addCulture = (payload) => ({
  type: ADD_CULTURE,
  payload,
});

export const removeCulture = (payload) => ({
  type: REMOVE_CULTURE,
  payload,
});

export const addBar = (payload) => ({
  type: ADD_BAR,
  payload,
});

export const removeBar = (payload) => ({
  type: REMOVE_BAR,
  payload,
});

export const getPrefPromenade = (payload) => ({
  type: GET_PREF_PROMENADE,
  payload,
});

export const getPrefShopping = (payload) => ({
  type: GET_PREF_SHOPPING,
  payload,
});

export const getPrefActAqua = (payload) => ({
  type: GET_PREF_ACT_AQUA,
  payload
});

export const getPrefSpectacle = (payload) => ({
  type: GET_PREF_SPECTACLE,
  payload,
});

export const getPrefMonuments = (payload) => ({
  type: GET_PREF_MONUMENTS,
  payload,
});
