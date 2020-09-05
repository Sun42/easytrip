import { connect } from 'react-redux';
import Header from '../components/Header';

import { getUserAllTrips } from '../store/action/trips-actions';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  loggedMessage: state.login.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetUserAllTrips: () => {
    dispatch(getUserAllTrips());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
