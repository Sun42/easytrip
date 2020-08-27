import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  getPrefGastronomie, removePrefGastronomie, getPrefCulture, getPrefBar, getPrefPromenade,
  getPrefShopping, getPrefActAqua, getPrefSpectacle, getPrefMonuments,
} from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({

  handlePrefGastronomie: (checkbox) => {
    if (checkbox.checked) {
      console.log('je coche', checkbox.checked);
      dispatch(getPrefGastronomie());
    }
    else {
      console.log('je dechoche', checkbox.checked);
      dispatch(removePrefGastronomie());
    }
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
