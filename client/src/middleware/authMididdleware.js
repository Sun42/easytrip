import axios from 'axios';
import { LOGIN, loginSuccess, loginError} from '../store/action/login-actions';

export default (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    /*case LOGOUT: {
      axios({
        method: 'post',
        url: ,
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
    }*/ 
    /*case CHECK_AUTH: {
      axios({
        method: 'post',
        url :"",
        withCredentials: true // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.logged) {
            store.dispatch(loginSuccess(res.data.info));
          }
        })
        .catch((err) => {
          console.error(err);
        })
      break;
    }   */
    // réagir au login
    case LOGIN: {
      const { login } = store.getState();
      console.log(login);
      axios({
        method: 'post',
        url: "http://localhost:3000/api/connexion",
        data: login,
        withCredentials: false // Je veux que le serveur sache qui je suis grace à la session
      })
        .then((res) => {
          const { info } = res.data;
          store.dispatch(loginSuccess(info));
        })
        .catch((err) => {
          store.dispatch(loginError("Impossible de connecter cet utilisateur"))
        })

      break;
    }
    default:
      return;
   

  }

}

