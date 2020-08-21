import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = () => {
  return {
    newMap: state.data,
  };
};

const mapDispatchToState = null;

export default connect(mapStateToProps, mapDispatchToState)(Result);
