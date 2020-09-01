import { connect } from 'react-redux';
import Carnet from '../components/Carnet';

const mapStateToProps = (state) => ({
    // name: state.trips.newTrip.name,
    // destination: state.trips.newTrip.destination,
    // startDate: state.trips.newTrip.startDate,
    // endDate: state.trips.newTrip.endDate,
    carnet: state.trips.carnet,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Carnet);