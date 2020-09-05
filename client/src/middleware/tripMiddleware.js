// import { useParams } from 'react-router-dom';
import axios from 'axios';

import { 
  GET_USER_ALL_TRIPS, 
  getUserAllTripsSuccess, getUserAllTripsError, 
  ADD_NEW_ACTIVITY, addNewActivitySuccess, addNewActivityError,
  CREATE_NEW_TRAVELOGUE, createNewTravelogueSuccess, createNewTravelogueError
} from '../store/action/trips-actions';

const tripMiddleware = (store) => (next) => (action) => {
  next(action);
  switch(action.type) {
    // eslint-disable-next-line no-lone-blocks
    case GET_USER_ALL_TRIPS: {
      axios({
        method: 'get',
        url: `http://localhost:3000/api/mes-voyages/:user_id`,
        withCredentials: true, 
      })
        .then((res) => {
          store.dispatch(getUserAllTripsSuccess(res.data.travelogues));
          
        })
        .catch((e) => {
          store.dispatch(getUserAllTripsError(e));
        });
      break;  
    };
    case CREATE_NEW_TRAVELOGUE: {
      const travelogue = store.getState().trips.carnet[0];
      console.log('Bonjour je suis le méchant travelogue', travelogue);
       axios({
        method: 'post',
        url: `http://localhost:3000/api/mon-voyage/new`,
         data: {
           name: travelogue.name,
           city: travelogue.destination,
           date_departure: travelogue.startDate,
           date_return: travelogue.endDate,
          },
          withCredentials:true,
           })
         .then((res) => {
           store.dispatch(createNewTravelogueSuccess());
        })
         .catch((e) => {
           store.dispatch(createNewTravelogueError());
        });
      break;
    };
    case ADD_NEW_ACTIVITY: {
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
        withCredentials: true
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