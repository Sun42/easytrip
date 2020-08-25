import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
  name: state.filters.name,
});

const mapDispatchToState = null;

export default connect(mapStateToProps, mapDispatchToState)(Result);
