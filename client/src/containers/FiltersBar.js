import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  addGastronomie, addCulture, addBar, addPromenade,
  addShopping, addActAqua, getPrefSpectacle, getPrefMonuments,
  removeGastronomie, removeCulture, removeBar, removePromenade,
  removeShopping, removeActAqua,
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

  handleAddActAqua: (aquatic) => {
    dispatch(addActAqua(aquatic));
  },

  handleRemoveActAqua: (aquatic) => {
    dispatch(removeActAqua(aquatic));
  },

  handlePrefSpectacle: (fun) => {
    dispatch(getPrefSpectacle(fun));
  },

  handlePrefMonuments: (historic) => {
    dispatch(getPrefMonuments(historic));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
