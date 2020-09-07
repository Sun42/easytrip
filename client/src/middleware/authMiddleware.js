import axios from 'axios';
import {
  LOGIN, CHECK_AUTH, loginSuccess, loginError, signupSuccess, signupFailed, SIGNUPFORM, LOGOUT, logoutSuccess/*@fixme no-unused-vars, signupForm, SignUpForm*/,
} from '../store/action/login-actions';

/**@fixme no-unused-vars
import { GET_SEARCH_SUBMIT_SUCCESS } from '../store/action/filters-actions';
*/
const authMiddleware = (store) => (next) => (action) => {
  next(action);
  console.log('authMiddleware action.type', action.type);
  switch (action.type) {
    case LOGOUT: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/deconnexion',
        withCredentials: true
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(logoutSuccess());
        })
        .catch((err) => {
          console.error(err);
        })
      break;
    }
    // réagir au login
    case LOGIN: {
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/connexion',
        data: {
          email: store.getState().login.email,
          password: store.getState().login.password,
        },
        withCredentials: true, // Je veux que le serveur sache qui je suis grace à la session
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
          console.log('CHECK_AUTH', res.data);
          if (res.data.logged === true ){
            store.dispatch(loginSuccess(res.data));
          } else {store.dispatch(loginError('Utilisateur non connecté'));}
        })
        .catch((err) => {
          console.error('CHECK AUTH ERROR');
          console.error(err);
          store.dispatch(loginError('Utilisateur non connecté'));
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
