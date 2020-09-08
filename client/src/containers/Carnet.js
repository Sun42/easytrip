import { connect } from 'react-redux';
import Carnet from '../components/Carnet';

import { getUserAllActivities, deleteTravelogue } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
    carnet: state.trips.carnet,
});

const mapDispatchToProps = (dispatch) => ({

    handleGetUserAllActivities: (id) => {
      dispatch(getUserAllActivities(id));
    },

    handleDeleteTravelogue: (id) => {
      dispatch(deleteTravelogue(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Carnet);