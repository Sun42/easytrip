import { connect } from 'react-redux';
import SignUpForm from '../components/SignUpForm';
import { changeField, signupForm } from '../store/action/login-actions';

const mapStateToProps = (state) => ({
  // modif Sarah
  loading: state.login.loading,
  errorMessage: state.login.errorMessage,
  email: state.login.email,
  password: state.login.password,
  name: state.login.name,
  isLogged: state.login.isLogged,
  surName: state.login.surName,
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
    console.log('Je soumets le formulaire de création');
    dispatch(signupForm()); // modif sarah
    console.log(`${signupForm}`) // modif sarah
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
