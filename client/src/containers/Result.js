import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = (state) => ({
  cordinates: state.filters.cordinates,
  name: state.filters.name,
  loading: state.filters.loading,
});

const mapDispatchToState = null;

export default connect(mapStateToProps, mapDispatchToState)(Result);
