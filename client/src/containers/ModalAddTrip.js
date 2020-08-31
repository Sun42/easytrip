import { connect } from 'react-redux';
import ModalAddTrip from '../components/ModalAddTrip';
import { addDestination, addStartDate, addEndDate, addTrip } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  destination: state.trips.destination,
});

const mapDispatchToState = (dispatch) => ({

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
    dispatch(addTrip());
  },

});

export default connect(mapStateToProps, mapDispatchToState)(ModalAddTrip);
