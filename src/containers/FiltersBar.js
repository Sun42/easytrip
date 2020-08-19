import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import { getAvail } from '../store/action/filters-actions';
import { getPref } from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  
  handleAvail: () => {
    dispatch(getAvail());
  },

  handlePref: () => {
    dispatch(getPref());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
