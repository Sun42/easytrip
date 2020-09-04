// import { useParams } from 'react-router-dom';
import axios from 'axios';

import { 
  GET_USER_ALL_TRIPS, 
  getUserAllTripsSuccess, getUserAllTripsError, 
  ADD_NEW_ACTIVITY, addNewActivitySuccess, addNewActivityError,
} from '../store/action/trips-actions';

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
          store.dispatch(getUserAllTripsSuccess(res.data.travelogues));
          
        })
        .catch((e) => {
          store.dispatch(getUserAllTripsError(e));
        });
      break;  
    };
    case ADD_NEW_ACTIVITY: {
      const userID = 1;
      const { information, localisation, name } = action.payload;
      const { lat, lon } = localisation;
      axios({
        method: 'post',
        url: `http://localhost:3000/api/activity/new/`,
        data: {
          user_id: userID,
          name: name,
          travelogue_id: 1,
          information: information,
          localisation: {
            lat: lat,
            lon: lon,
          }
        },
      })
        .then((res) => {
          store.dispatch(addNewActivitySuccess());
        })
        .catch((e) => {
          store.dispatch(addNewActivityError(e));
        });
      break;  
    }
    default:
  }
};

export default tripMiddleware;