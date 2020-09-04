import axios from 'axios';
import {
  LOGIN, CHECK_AUTH, loginSuccess, loginError, signupSuccess, signupFailed, SIGNUPFORM/*@fixme no-unused-vars, signupForm, SignUpForm*/,
} from '../store/action/login-actions';

/**@fixme no-unused-vars
import { GET_SEARCH_SUBMIT_SUCCESS } from '../store/action/filters-actions';
*/
const authMiddleware = (store) => (next) => (action) => {
  next(action);
  console.log('authMiddleware action.type', action.type);
  switch (action.type) {
    /* case LOGOUT: {
      axios({
        method: 'post',
        url: ,
        with: true
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          console.error(err);
        })
      break;
    } */
    // réagir au login
    case LOGIN: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/connexion',
        data: {
          email: store.getState().login.email,
          password: store.getState().login.password,
        },
        withCredentials: false, // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          store.dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          store.dispatch(loginError('Impossible de connecter cet utilisateur'));
        });

      break;
    }
    case CHECK_AUTH: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/islogged',
        withCredentials: true // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          console.log('CHECK_AUTH OK', res.data);
          if (res.data.logged) {
            store.dispatch(loginSuccess(res.data));
          }
        })
        .catch((err) => {
          console.error('CHECK AUTH ERROR');
          console.error(err);
        })
      break;
    }
    // Inscription
    case SIGNUPFORM: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/inscription',
        data: {
          email: store.getState().login.email,
          password: store.getState().login.password,
          name: store.getState().login.name,
          surname: store.getState().login.surName,
        },
        withCredentials: true, // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          console.log(res.data); // modif sarah
          store.dispatch(signupSuccess()); // modif sarah
        })
        .catch((err) => {
          console.log(err); // modif sarah
          store.dispatch(signupFailed(err)); // modif sarah
        });

      break;
    }

    default:
  }
};

export default authMiddleware;
