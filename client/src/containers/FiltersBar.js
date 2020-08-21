import { connect } from 'react-redux';
import axios from 'axios';
import regeneratorRuntime from 'regenerator-runtime';
import FiltersBar from '../components/FiltersBar';
import {
  getAvail, getData, getPrefGastronomie, getPrefCulture, getPrefBar, getPrefPromenade,
  getPrefShopping, getPrefActAqua, getPrefSpectacle,
} from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({

  handleAvail: () => {
    dispatch(getAvail());
  },

  fetchData: async () => {
    try {
      const res = await axios({
        method: 'get',
        url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      });
      dispatch(getData(res.data));
    }
    catch (e) {
      console.log(e);
    }
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
