import {
  CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS,
} from '../store/action/login-actions';

const stateInitial = {
  email: 'nawal@easytrip.com',
  password: 'nawal',
  username: 'Nawal',
  isLogged: false,
  loggedMessage: 'Bienvenue',
  error: '',
  login: {},
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        login: {},
        loggedMessage: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        error: '',
        login: action.payload,
        loggedMessage: `Bienvenue ${action.payload.username}`,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        password: '',
        error: action.payload,
        loggedMessage: '',
        login: {},
        isLogged: false,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
