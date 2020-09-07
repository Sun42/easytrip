import { connect } from 'react-redux';
import Result from '../components/Result';
import { addNewActivity, getSelectedActivity, closePopUp } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
  name: state.filters.name,
  loading: state.filters.loading,
  foodFilter: state.filters.allPOI.food,
  artFilter: state.filters.allPOI.art,
  pubFilter: state.filters.allPOI.pub,
  excursionFilter: state.filters.allPOI.excursion,
  shopFilter: state.filters.allPOI.shop,
  acquaticFilter: state.filters.allPOI.aquatic,
  funFilter: state.filters.allPOI.fun,
  historicFilter: state.filters.allPOI.historic,
  foodCheck: state.filters.checkbox.food,
  artCheck: state.filters.checkbox.art,
  pubCheck: state.filters.checkbox.pub,
  excursionCheck: state.filters.checkbox.excursion,
  shopCheck: state.filters.checkbox.shop,
  acquaticCheck: state.filters.checkbox.acquatic,
  funCheck: state.filters.checkbox.fun,
  historicCheck: state.filters.checkbox.historic,
  mytrips: state.trips.carnet,
  selectedActivity: state.trips.selectedActivity,
  newActivityAddedBool: state.trips.newActivityAddedBool,
  newActivityAddedInfo: state.trips.newActivityAddedInfo,
  newCarnetCreated: state.trips.newCarnetCreated,
});

const mapDispatchToState = (dispatch) => ({
  handleAddNewActivity: (activity) => {
    dispatch(addNewActivity(activity));
  },

  handleSelectedActivity: (clickedItem4) => {
    dispatch(getSelectedActivity(clickedItem4));
  },

  handleClosePopUp: () => {
    dispatch(closePopUp());
  },

});

export default connect(mapStateToProps, mapDispatchToState)(Result);
