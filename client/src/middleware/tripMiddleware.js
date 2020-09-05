import axios from 'axios';

import { 
  GET_USER_ALL_TRIPS, 
  getUserAllTripsSuccess, getUserAllTripsError, 
  ADD_NEW_ACTIVITY, addNewActivitySuccess, addNewActivityError,
  CREATE_NEW_TRAVELOGUE, createNewTravelogueSuccess, createNewTravelogueError,
  GET_USER_ALL_ACTIVITIES, getUserAllActivitiesSuccess, getUserAllActivitiesError,
} from '../store/action/trips-actions';

const tripMiddleware = (store) => (next) => (action) => {
  next(action);
  switch(action.type) {
    case GET_USER_ALL_TRIPS: //{
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
    //};
    case CREATE_NEW_TRAVELOGUE: {
      const travelogue = store.getState().trips.newCarnet[0];
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
      const tripID = store.getState().trips.tripID;
      axios({
        method: 'post',
        url: `http://localhost:3000/api/activity/new/`,
        data: {
          name: name,
          travelogue_id: tripID,
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
    case GET_USER_ALL_ACTIVITIES: {
      const { id } = action.payload;
      console.log('useparamsid', id);
      axios({
        method: 'get',
        // url:,
        withCredentials: true, 
      })
        .then((res) => {
          store.dispatch(getUserAllActivitiesSuccess(res.data));
        })
        .catch((e) => {
          store.dispatch(getUserAllActivitiesError());
        });
      break;
    }
    default:
  }
};

export default tripMiddleware;