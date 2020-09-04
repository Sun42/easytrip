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
    // case CREATE_NEW_TRAVELOGUE: {
    //   axios({
    //     method: 'post',
    //     url: `http://localhost:3000/api/mon-voyage/new`,
    //     data: {
    //       name: 'name',
    //       city: 'city',
    //       date_departure: '11',
    //       date_return: '12',
    //     }
    //   })
    //     .then((res) => {
    //       store.dispatch(createNewTravelogueSuccess());
    //     })
    //     .catch((e) => {
    //       store.dispatch(createNewTravelogueError());
    //     });
    //   break;
    // };
    case ADD_NEW_ACTIVITY: {
      // const userID = 1;
      const { information, location, name } = action.payload;
      const { lat, lon } = location;
      axios({
        method: 'post',
        url: `http://localhost:3000/api/activity/new/`,
        data: {
          name: name,
          travelogue_id: 1,
          information: information,
          location: {
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