import axios from 'axios';

import { GET_USER_ALL_TRIPS, getUserAllTrips } from '../store/action/trips-actions';

const tripMiddleware = (store) => (next) => (action) => {
  next(action);
  switch(action.type) {
    case GET_USER_ALL_TRIPS: {
      const userID = 1;
      axios({
        method: 'get',
        url: `http://localhost:3000/api/mes-voyages/${userID}`
      })
        .then((res) => {
        //   store.dispatch(getUserAllTripsToState(res.data));
          console.log('je suis la data', res.data);
        })
        .catch((e) => {
          console.error(e);
        });
      break;  
    }
    default:
  }
};

export default tripMiddleware;