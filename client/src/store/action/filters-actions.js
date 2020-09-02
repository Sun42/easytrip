export const GET_SEARCH = 'GET_SEARCH';
export const GET_SEARCH_SUBMIT = 'GET_SEARCH_SUBMIT';
export const GET_SEARCH_SUBMIT_SUCCESS = 'GET_SEARCH_SUBMIT_SUCCESS';
export const GET_ALL_POI = 'GET_ALL_POI';
export const GET_SEARCH_SUBMIT_SUCCESS_NAME = 'GET_SEARCH_SUBMIT_SUCCESS_NAME';
export const GET_SEARCH_SUBMIT_ERROR = 'GET_SEARCH_SUBMIT_ERROR';
export const TOGGLE_FOOD = 'TOGGLE_FOOD';
export const TOGGLE_ART = 'TOGGLE_ART';
export const TOGGLE_PUB = 'TOGGLE_PUB';
export const TOGGLE_EXCURSION = 'TOGGLE_EXCURSION';
export const TOGGLE_SHOP = 'TOGGLE_SHOP';
export const TOGGLE_ACQUATIC = 'TOGGLE_ACQUATIC';
export const TOGGLE_FUN = 'TOGGLE_FUN';
export const TOGGLE_HISTORIC = 'TOGGLE_HISTORIC';

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

export const getAllPOI = (payload) => ({
  type: GET_ALL_POI,
  payload,
});

export const getSearchSubmitSuccessName = (payload) => ({
  type: GET_SEARCH_SUBMIT_SUCCESS_NAME,
  payload,
});

export const getSearchSubmitError = (payload) => ({
  type: GET_SEARCH_SUBMIT_ERROR,
  payload,
});

export const toggleFood = () => ({
  type: TOGGLE_FOOD,
});

export const toggleArt = () => ({
  type: TOGGLE_ART,
});

export const togglePub = () => ({
  type: TOGGLE_PUB,
});

export const toggleExcursion = () => ({
  type: TOGGLE_EXCURSION,
});

export const toggleShop = () => ({
  type: TOGGLE_SHOP,
});

export const toggleAcquatic = () => ({
  type: TOGGLE_ACQUATIC,
});

export const toggleFun = () => ({
  type: TOGGLE_FUN,
});

export const toggleHistoric = () => ({
  type: TOGGLE_HISTORIC,
});
