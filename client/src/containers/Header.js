import { connect } from 'react-redux';
import Header from '../components/Header';

import { getUserAllTrips } from '../store/action/trips-actions';
import {logout} from '../store/action/login-actions';

const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  loggedMessage: state.login.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  handleGetUserAllTrips: () => {
    dispatch(getUserAllTrips());
  },
  handleLogout:() => {
    console.log('Je me deconnecte')
    dispatch(logout());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
