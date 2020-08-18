import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import { getAvail } from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  onGetAvail: () => {
    dispatch(getAvail());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
