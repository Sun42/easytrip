import { connect } from 'react-redux';
import MonVoyage from '../components/MonVoyage';

import { activityDone, favActivity, removeActivity } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  activities: state.trips.activities,
});

const mapDispatchToProps = ((dispatch) => ({

  handleActivityDone: (id) => {
    dispatch(activityDone(id));
  },

  handleFavActivity: (id) => {
    dispatch(favActivity(id));
  },

  handleRemoveActivity: (id) => {
    dispatch(removeActivity(id));
  },

}))

export default connect(mapStateToProps, mapDispatchToProps)(MonVoyage);
