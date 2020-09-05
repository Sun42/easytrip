import { connect } from 'react-redux';
import ModalAddTrip from '../components/ModalAddTrip';
import {
  addName, addDestination, addStartDate, addEndDate, addTrip,
  getUserAllTrips,
} from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  destination: state.trips.destination,
  name: state.trips.name,
});

const mapDispatchToState = (dispatch) => ({

  handleAddName: (text) => {
    dispatch(addName(text));
  },

  handleAddDestination: (text) => {
    dispatch(addDestination(text));
  },

  handleAddStartDate: (convertedStartDate) => {
    dispatch(addStartDate(convertedStartDate));
  },

  handleAddEndDate: (convertedEndDate) => {
    dispatch(addEndDate(convertedEndDate));
  },

  handleAddTrip: () => {
    console.log('je suis dans le AC ADD TRIP');
    dispatch(addTrip());
  },

  handleGetUserAllTrips: () => {
    console.log('je suis dans le AC');
    dispatch(getUserAllTrips());
  }

});

export default connect(mapStateToProps, mapDispatchToState)(ModalAddTrip);
