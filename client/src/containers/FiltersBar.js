import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  addFood, addArt, addPub, addExcursion, addShop, 
  addAcquatic, addFun, addHistoric,
  removeFood, removeArt, removePub, removeExcursion,
  removeShop, removeAcquatic, removeFun, removeHistoric,
} from '../store/action/filters-actions';

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({

  handleAddFood: () => {
    dispatch(addFood());
  },

  handleRemoveFood: () => {
    dispatch(removeFood());
  },

  handleAddArt: () => {
    dispatch(addArt());
  },

  handleRemoveArt: () => {
    dispatch(removeArt());
  },

  handleAddPub: () => {
    dispatch(addPub());
  },

  handleRemovePub: () => {
    dispatch(removePub());
  },

  handleAddExcursion: () => {
    dispatch(addExcursion());
  },

  handleRemoveExcursion: () => {
    dispatch(removeExcursion());
  },

  handleAddShop: () => {
    dispatch(addShop());
  },

  handleRemoveShop: () => {
    dispatch(removeShop());
  },

  handleAddAcquatic: () => {
    dispatch(addAcquatic());
  },

  handleRemoveAcquatic: () => {
    dispatch(removeAcquatic());
  },

  handleAddFun: () => {
    dispatch(addFun());
  },

  handleRemoveFun: () => {
    dispatch(removeFun());
  },

  handleAddHistoric: () => {
    dispatch(addHistoric());
  },

  handleRemoveHistoric: () => {
    dispatch(removeHistoric());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
