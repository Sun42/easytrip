import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  getPrefGastronomie, getPrefCulture, getPrefBar, getPrefPromenade,
  getPrefShopping, getPrefActAqua, getPrefSpectacle, getPrefMonuments,
} from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({

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

  handlePrefMonuments: () => {
    dispatch(getPrefMonuments());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
