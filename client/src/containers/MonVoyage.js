import { connect } from 'react-redux';
import MonVoyage from '../components/MonVoyage';

// SELECTORS
import { getTripBySlug, sortActivities } from '../reducers/trips';

import { changeDoneActivity, changeFavoriteActivity, deleteActivity } from '../store/action/trips-actions';

const mapStateToProps = (state, ownProps) => {
  const { slug } = ownProps.match.params;
  return {
    activities: sortActivities(state),
    trip: getTripBySlug(state, slug),
  }
};

const mapDispatchToProps = ((dispatch) => ({

  handleChangeDoneActivity: (id, is_done) => {
    dispatch(changeDoneActivity(id, is_done));
  },

  handleChangeFavoriteActivity: (id, is_favorite) => {
    dispatch(changeFavoriteActivity(id, is_favorite));
  },

  handleDeleteActivity: (id) => {
    dispatch(deleteActivity(id));
  },

}))

export default connect(mapStateToProps, mapDispatchToProps)(MonVoyage);
