// import { useParams } from 'react-router-dom';
import axios from 'axios';

import { 
  GET_USER_ALL_TRIPS, 
  getUserAllTripsSuccess, getUserAllTripsError 
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
    // case ADD_NEW_ACTIVITY: {
    //   const userID = 1;
    //   axios({
    //     method: 'post',
    //     url: `http://localhost:3000/api/ /${userID}`,
    //     data: 
    //   })
    //     .then((res) => {
    //       store.dispatch(addNewActivitySuccess());
    //     })
    //     .catch((e) => {
    //       store.dispatch(addNewActivityError(e));
    //     });
    //   break;  
    // }
    default:
  }
};

export default tripMiddleware;