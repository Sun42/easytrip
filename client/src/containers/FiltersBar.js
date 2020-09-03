import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  toggleFood, toggleArt, togglePub, toggleExcursion, toggleShop, 
  toggleAcquatic, toggleFun, toggleHistoric,
} from '../store/action/filters-actions';

import { getUserAllTrips } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  myCarnet: state.trips.carnet,
})

const mapDispatchToProps = (dispatch) => ({

  handleToggleFood: () => {
    dispatch(toggleFood());
  },

  handleToggleArt: () => {
    dispatch(toggleArt());
  },

  handleTogglePub: () => {
    dispatch(togglePub());
  },

  handleToggleExcursion: () => {
    dispatch(toggleExcursion());
  },

  handleToggleShop: () => {
    dispatch(toggleShop());
  },

  handleToggleAcquatic: () => {
    dispatch(toggleAcquatic());
  },

  handleToggleFun: () => {
    dispatch(toggleFun());
  },

  handleToggleHistoric: () => {
    dispatch(toggleHistoric());
  },

  handleUserAllTrips: () => {
    dispatch(getUserAllTrips());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
