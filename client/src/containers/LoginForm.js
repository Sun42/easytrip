import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { changeField, login, logout } from '../store/action/login-actions';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  isLogged: state.login.isLogged,
  loggedMessage: state.login.loggedMessage,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // Je rassemble dans un objet le nom de l'input
    // qui a changé, et sa valeur
    const changeObject = {
      [name]: value,
    };
    console.log(changeObject);
    dispatch(changeField(changeObject));
  },
  handleLogin: (changeData) => {
    console.log('login');
    dispatch(login(changeData));
  },
  handleLogout: () => {
    console.log('logout');
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
