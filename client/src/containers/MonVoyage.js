import { connect } from 'react-redux';
import MonVoyage from '../components/MonVoyage';

// SELECTOR
import { getTripBySlug } from '../reducers/trips';

import { activityDone, favActivity, deleteActivity } from '../store/action/trips-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    activities: state.trips.activities,
    trip: getTripBySlug(state, slug),
  }
};

const mapDispatchToProps = ((dispatch) => ({

  handleActivityDone: (id) => {
    dispatch(activityDone(id));
  },

  handleFavActivity: (id) => {
    dispatch(favActivity(id));
  },

  handleDeleteActivity: (id) => {
    dispatch(deleteActivity(id));
  },

}))

export default connect(mapStateToProps, mapDispatchToProps)(MonVoyage);
