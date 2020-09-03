import { connect } from 'react-redux';
import Carnet from '../components/Carnet';

const mapStateToProps = (state) => ({
    carnet: state.trips.carnet,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Carnet);