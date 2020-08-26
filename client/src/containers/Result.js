import { connect } from 'react-redux';
import Result from '../components/Result';
import { addNewActivity } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
  name: state.filters.name,
  loading: state.filters.loading,
  resultList: state.trips.result,
});

const mapDispatchToState = (dispatch) => ({
  handleAddNewActivity: () => {
    dispatch(addNewActivity());
  },

});

export default connect(mapStateToProps, mapDispatchToState)(Result);
