import axios from 'axios';

import { 
  GET_USER_ALL_TRIPS, 
  getUserAllTripsSuccess, getUserAllTripsError, 
  ADD_NEW_ACTIVITY, addNewActivitySuccess, addNewActivityError,
  CREATE_NEW_TRAVELOGUE, createNewTravelogueSuccess, createNewTravelogueError,
  GET_USER_ALL_ACTIVITIES, getUserAllActivitiesSuccess, getUserAllActivitiesError, getUserAllTrips,
  DELETE_TRAVELOGUE, deleteTravelogueSuccess, deleteTravelogueError,
} from '../store/action/trips-actions';

const tripMiddleware = (store) => (next) => (action) => {
  next(action);
  switch(action.type) {
    case GET_USER_ALL_TRIPS: //{
      console.log('je suis dans le mv getuseralltrip');
      axios({
        method: 'get',
        url: `http://localhost:3000/api/mesvoyages/:user_id`,
        withCredentials: true, 
      })
        .then((res) => {
          console.log('resdata travelogues', res.data.travelogues);
          store.dispatch(getUserAllTripsSuccess(res.data.travelogues));
          
        })
        .catch((e) => {
          store.dispatch(getUserAllTripsError(e));
        });
      break;  
    //};
    case CREATE_NEW_TRAVELOGUE: {
      const travelogue = store.getState().trips.newCarnet[0];
      console.log('je suis le nouveau travelogue', travelogue);
       axios({
        method: 'post',
        url: `http://localhost:3000/api/monvoyage/new`,
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
           store.dispatch(getUserAllTrips());
        })
         .catch((e) => {
           store.dispatch(createNewTravelogueError());
        });
      break;
    };
    case DELETE_TRAVELOGUE: {
      const { id } = action.payload;
      console.log('carnet to delete', id);
      axios({
        method: 'delete',
        url: `http://localhost:3000/api/mesvoyages/monvoyage/${id}`,
        withCredentials: true,
      })
        .then((res) => {
          store.dispatch(deleteTravelogueSuccess());
          store.dispatch(getUserAllTrips());
        })
        .catch((e) => {
          store.dispatch(deleteTravelogueError());
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
      console.log('mv de all activities', id);
      axios({
        method: 'get',
        url: `http://localhost:3000/api/mesvoyages/monvoyage/${id}`,
        withCredentials: true, 
      })
        .then((res) => {
          console.log('res.data de all activities', res.data);
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