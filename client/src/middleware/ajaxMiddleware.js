import axios from 'axios';
import { GET_SEARCH_SUBMIT, getSearchSubmitSuccess, getSearchSubmitError } from '../store/action/filters-actions';

const ajaxMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case GET_SEARCH_SUBMIT: {
      const destination = store.getState().search;
      console.log('cest la destination', destination);
      axios({
        method: 'get',
        url: 'http://localhost:3000/api/search?location=PARIS',
        data: destination,
      })
        .then((res) => {
          store.dispatch(getSearchSubmitSuccess(res.data.location.boundingbox));
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
