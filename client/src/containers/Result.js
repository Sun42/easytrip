import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
});

const mapDispatchToState = null;

export default connect(mapStateToProps, mapDispatchToState)(Result);
