export const GET_SEARCH = 'GET_SEARCH';
export const GET_SEARCH_SUBMIT = 'GET_SEARCH_SUBMIT';
export const GET_SEARCH_SUBMIT_SUCCESS = 'GET_SEARCH_SUBMIT_SUCCESS';
export const GET_ALL_POI = 'GET_ALL_POI';
export const GET_SEARCH_SUBMIT_SUCCESS_NAME = 'GET_SEARCH_SUBMIT_SUCCESS_NAME';
export const GET_SEARCH_SUBMIT_ERROR = 'GET_SEARCH_SUBMIT_ERROR';
export const ADD_FOOD = 'ADD_FOOD';
export const ADD_ART = 'ADD_ART';
export const ADD_PUB = 'ADD_PUB';
export const ADD_EXCURSION = 'ADD_EXCURSION';
export const ADD_SHOP = 'ADD_SHOP';
export const ADD_ACQUATIC = 'ADD_ACQUATIC';
export const ADD_FUN = 'ADD_FUN';
export const ADD_HISTORIC = 'ADD_HISTORIC';
export const REMOVE_FOOD = 'REMOVE_FOOD';
export const REMOVE_ART = 'REMOVE_ART';
export const REMOVE_PUB = 'REMOVE_PUB';
export const REMOVE_EXCURSION = 'REMOVE_EXCURSION';
export const REMOVE_SHOP = 'REMOVE_SHOP';
export const REMOVE_ACQUATIC = 'REMOVE_ACQUATIC';
export const REMOVE_FUN = 'REMOVE_FUN';
export const REMOVE_HISTORIC = 'REMOVE_HISTORIC';

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

export const addFood = () => ({
  type: ADD_FOOD,
});

export const removeFood = () => ({
  type: REMOVE_FOOD,
});

export const addArt = () => ({
  type: ADD_ART,
});

export const removeArt = () => ({
  type: REMOVE_ART,
});

export const addPub = () => ({
  type: ADD_PUB,
});

export const removePub = () => ({
  type: REMOVE_PUB,
});

export const addExcursion = () => ({
  type: ADD_EXCURSION,
});

export const removeExcursion = () => ({
  type: REMOVE_EXCURSION,
});

export const addShop = () => ({
  type: ADD_SHOP,
});

export const removeShop = () => ({
  type: REMOVE_SHOP,
});

export const addAcquatic = () => ({
  type: ADD_ACQUATIC,
});

export const removeAcquatic = () => ({
  type: REMOVE_ACQUATIC,
});

export const addFun = () => ({
  type: ADD_FUN,
});

export const removeFun = () => ({
  type: REMOVE_FUN,
});

export const addHistoric = () => ({
  type: ADD_HISTORIC,
});

export const removeHistoric = () => ({
  type: REMOVE_HISTORIC,
});
