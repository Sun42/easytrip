import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  toggleFood, toggleArt, togglePub, toggleExcursion, toggleShop, 
  toggleAcquatic, toggleFun, toggleHistoric,
} from '../store/action/filters-actions';

import { getUserAllTrips, getTripID } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  myCarnet: state.trips.carnet,
  foodCheck: state.filters.checkbox.food,
  artCheck: state.filters.checkbox.art,
  pubCheck: state.filters.checkbox.pub,
  excursionCheck: state.filters.checkbox.excursion,
  shopCheck: state.filters.checkbox.shop,
  acquaticCheck: state.filters.checkbox.acquatic,
  funCheck: state.filters.checkbox.fun,
  historicCheck: state.filters.checkbox.historic,
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

  // handleUserAllTrips: () => {
  //   dispatch(getUserAllTrips());
  // },

  handleTripID: (id) => {
    dispatch(getTripID(id));
  },

  handleGetUserAllTrips: () => {
    dispatch(getUserAllTrips());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
