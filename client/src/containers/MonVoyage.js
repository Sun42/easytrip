import { connect } from 'react-redux';
import MonVoyage from '../components/MonVoyage';

// SELECTOR
import { getTripBySlug } from '../reducers/trips';

import { changeDoneActivity, favActivity, deleteActivity } from '../store/action/trips-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    activities: state.trips.activities,
    trip: getTripBySlug(state, slug),
  }
};

const mapDispatchToProps = ((dispatch) => ({

  handleChangeDoneActivity: (id, is_done) => {
    dispatch(changeDoneActivity(id, is_done));
  },

  handleFavActivity: (id) => {
    dispatch(favActivity(id));
  },

  handleDeleteActivity: (id) => {
    dispatch(deleteActivity(id));
  },

}))

export default connect(mapStateToProps, mapDispatchToProps)(MonVoyage);
