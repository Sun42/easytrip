import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  getAvail, getPrefGastronomie, getPrefCulture, getPrefBar, getPrefPromenade,
  getPrefShopping, getPrefActAqua, getPrefSpectacle,
} from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({

  handleAvail: () => {
    dispatch(getAvail());
  },

  handlePrefGastronomie: () => {
    dispatch(getPrefGastronomie());
  },

  handlePrefCulture: () => {
    dispatch(getPrefCulture());
  },

  handlePrefBar: () => {
    dispatch(getPrefBar());
  },

  handlePrefPromenade: () => {
    dispatch(getPrefPromenade());
  },

  handlePrefShopping: () => {
    dispatch(getPrefShopping());
  },

  handlePrefActAqua: () => {
    dispatch(getPrefActAqua());
  },

  handlePrefSpectacle: () => {
    dispatch(getPrefSpectacle());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
