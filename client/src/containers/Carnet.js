import { connect } from 'react-redux';
import Carnet from '../components/Carnet';

import { getUserAllActivities } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
    carnet: state.trips.carnet,
});

const mapDispatchToProps = (dispatch) => ({

    handleGetUserAllActivities: (id) => {
      dispatch(getUserAllActivities(id));
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Carnet);