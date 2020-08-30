import axios from 'axios';
import { GET_SEARCH_SUBMIT, getSearchSubmitSuccess,
  getSearchSubmitError, getSearchSubmitSuccessName,
} from '../store/action/filters-actions';

import { getSearchResultToState } from '../store/action/trips-actions';

const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_SEARCH_SUBMIT: {
      const destination = store.getState().filters.search;
      axios({
        method: 'get',
        url: `http://localhost:3000/api/search?location=${destination}&filters=1&food&pub&aquatic&historic&art&shop&excursion&fun`,
        data: destination,
      })
        .then((res) => {
          const lat = parseFloat((res.data.location.lat), 10);
          const lon = parseFloat((res.data.location.lon), 10);
          const cordinates = [lat, lon];
          store.dispatch(getSearchSubmitSuccess(cordinates));
          store.dispatch(getSearchSubmitSuccessName(res.data.location.address.city));
          store.dispatch(getSearchResultToState(res.data.elements));
        })
        .catch((err) => {
          console.error(err);
          store.dispatch(getSearchSubmitError('L\'endroit cherché n\'existe pas'));
        });
      break;
    }
    default:
  }
};

export default ajaxMiddleware;
