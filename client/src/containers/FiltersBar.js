import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  addGastronomie, addCulture, addBar, addPromenade,
  addShopping, getPrefActAqua, getPrefSpectacle, getPrefMonuments,
  removeGastronomie, removeCulture, removeBar, removePromenade,
  removeShopping,
} from '../store/action/filters-actions';

const mapStateToProps = (state) => ({
  allPoiOfDestination: state.trips.result,
});

const mapDispatchToProps = (dispatch) => ({

  handleAddGastronomie: (gastronomie) => {
    dispatch(addGastronomie(gastronomie));
  },

  handleRemoveGastronomie: () => {
    dispatch(removeGastronomie());
  },

  handleAddCulture: (art) => {
    dispatch(addCulture(art));
  },

  handleRemoveCulture: () => {
    dispatch(removeCulture());
  },

  handleAddBar: (bars) => {
    dispatch(addBar(bars));
  },

  handleRemoveBar: () => {
    dispatch(removeBar());
  },

  handleAddPromenade: (excursion) => {
    dispatch(addPromenade(excursion));
  },

  handleRemovePromenade: () => {
    dispatch(removePromenade());
  },

  handleAddShopping: (shop) => {
    dispatch(addShopping(shop));
  },

  handleRemoveShopping: () => {
    dispatch(removeShopping());
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
