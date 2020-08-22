import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = (state) => ({
  newMap: state.cordinates,
});

const mapDispatchToState = null;

export default connect(mapStateToProps, mapDispatchToState)(Result);
