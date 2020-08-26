export const GET_PREF_GASTRONOMIE = 'GET_PREF_GASTRONOMIE';
export const GET_PREF_CULTURE = 'GET_PREF_CULTURE';
export const GET_PREF_BAR = 'GET_PREF_BAR';
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
export const GET_FILTER_GASTRONOMIE_TO_STATE = 'GET_FILTER_GASTRONOMIE_TO_STATE';
export const GET_FILTER_CULTURE_TO_STATE = 'GET_FILTER_CULTURE_TO_STATE';

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

export const getPrefGastronomie = () => ({
  type: GET_PREF_GASTRONOMIE,
});

export const getFilterGastronomieToState = (payload) => ({
  type: GET_FILTER_GASTRONOMIE_TO_STATE,
  payload,
});

export const getPrefCulture = (payload) => ({
  type: GET_FILTER_CULTURE_TO_STATE,
  payload,
});

export const getFilterCultureToState = () => ({
  type: GET_PREF_CULTURE,
});

export const getPrefBar = () => ({
  type: GET_PREF_BAR,
});

export const getPrefPromenade = () => ({
  type: GET_PREF_PROMENADE,
});

export const getPrefShopping = () => ({
  type: GET_PREF_SHOPPING,
});

export const getPrefActAqua = () => ({
  type: GET_PREF_ACT_AQUA,
});

export const getPrefSpectacle = () => ({
  type: GET_PREF_SPECTACLE,
});

export const getPrefMonuments = () => ({
  type: GET_PREF_MONUMENTS,
});
