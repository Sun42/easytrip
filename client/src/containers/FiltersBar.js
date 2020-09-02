import { connect } from 'react-redux';
import FiltersBar from '../components/FiltersBar';
import {
  toggleFood, toggleArt, togglePub, toggleExcursion, toggleShop, 
  toggleAcquatic, toggleFun, toggleHistoric,
} from '../store/action/filters-actions';

const mapStateToProps = (state) => ({
  myTrips: state.trips.carnet,
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

});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBar);
