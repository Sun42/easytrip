import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { changeField, login, signup} from '../store/action/login-actions';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password,
  name: state.login.name,
  isLogged: state.login.isLogged,
  lastName: state.login.lastName,
  birthDate: state.login.birthDate,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    // Je rassemble dans un objet le nom de l'input
    // qui a changé, et sa valeur
    const changeObject = {
      [name]: value,
    };
    console.log(changeObject)
    dispatch(changeField(changeObject));
  },
  handleSignUp: () => {
    console.log('signup');
    dispatch(signup());
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
