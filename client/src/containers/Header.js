import { connect } from 'react-redux';
import Header from '../components/Header';
const mapStateToProps = (state) => ({
  isLogged: state.login.isLogged,
  loggedMessage: state.login.loggedMessage,
});
const mapDispatchToProps = null;
export default connect(mapStateToProps, mapDispatchToProps)(Header)
