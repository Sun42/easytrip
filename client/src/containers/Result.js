import { connect } from 'react-redux';
import Result from '../components/Result';
import { addNewActivity } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
  name: state.filters.name,
  loading: state.filters.loading,
  resultList: state.trips.result,
  gastronomieFilter: state.filters.gastronomieFilter,
  barFilter: state.filters.barFilter,
});

const mapDispatchToState = (dispatch) => ({
  handleAddNewActivity: (elem) => {
    dispatch(addNewActivity(elem));
  },

});

export default connect(mapStateToProps, mapDispatchToState)(Result);
