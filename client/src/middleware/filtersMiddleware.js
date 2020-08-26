import axios from 'axios';

import {
  GET_PREF_GASTRONOMIE, 
  GET_PREF_CULTURE, GET_PREF_BAR, GET_PREF_PROMENADE,
  GET_PREF_SHOPPING, GET_PREF_ACT_AQUA, GET_PREF_SPECTACLE, GET_PREF_MONUMENTS,
  getPrefCulture, getPrefBar, getPrefPromenade, getPrefShopping,
  getPrefActAqua, getPrefSpectacle, getPrefMonuments, getFilterGastronomieToState, 
  getFilterCultureToState,
} from '../store/action/filters-actions';

const filtersMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_PREF_GASTRONOMIE: {
      const destination = store.getState().filters.search;
      axios({
        method: 'get',
        url: `http://localhost:3000/api/search?location=${destination}&filters=1&food=1`,
        data: destination,
      })
        .then((res) => {
          store.dispatch(getFilterGastronomieToState(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
    }
      break;
    case GET_PREF_CULTURE: {
      const destination = store.getState().filters.search;
      axios({
        method: 'get',
        url: `http://localhost:3000/api/search?location=${destination}&filters=1&culture=1`,
        data: destination,
      })
        .then((res) => {
          store.dispatch(getFilterCultureToState(res.data));
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    }
    default:
  }
};

export default filtersMiddleware;
