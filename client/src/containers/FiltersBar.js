import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  addGastronomie, addCulture, addBar, getPrefPromenade,
  getPrefShopping, getPrefActAqua, getPrefSpectacle, getPrefMonuments,
  removeGastronomie, removeCulture, removeBar,
} from '../store/action/filters-actions';

const mapStateToProps = (state) => ({
  allPoiOfDestination: state.trips.result,
});

const mapDispatchToProps = (dispatch) => ({

  handleAddGastronomie: (gastronomie) => {
    dispatch(addGastronomie(gastronomie));
  },

  handleRemoveGastronomie: (gastronomie) => {
    dispatch(removeGastronomie(gastronomie));
  },

  handleAddCulture: (art) => {
    dispatch(addCulture(art));
  },

  handleRemoveCulture: (art) => {
    dispatch(removeCulture(art));
  },

  handleAddBar: (bars) => {
    dispatch(addBar(bars));
  },

  handleRemoveBar: (bars) => {
    dispatch(removeBar(bars));
  },

  handlePrefPromenade: (excursion) => {
    dispatch(getPrefPromenade(excursion));
  },

  handlePrefShopping: (shop) => {
    dispatch(getPrefShopping(shop));
  },

  handlePrefActAqua: (aquatic) => {
    dispatch(getPrefActAqua(aquatic));
  },

  handlePrefSpectacle: (fun) => {
    dispatch(getPrefSpectacle(fun));
  },

  handlePrefMonuments: (historic) => {
    dispatch(getPrefMonuments(historic));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
