import {
  CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGIN, LOGOUT,
} from '../store/action/login-actions';

const stateInitial = {
  email: 'nawal@easytrip.com',
  password: 'nawal',
  lastName: 'Lotfi',
  name: 'Nawal',
  birthDate: ' 26 Novembre 1988',
  isLogged: false,
  loggedMessage: 'Bienvenue Nawal',
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
    case LOGOUT:
      return {
        ...state,
        isLogged: false,
        user: {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        error: '',
        login: action.payload,
        loggedMessage: 'Bienvenue Nawal',
      };
    case LOGIN:
      return {
        ...state,
        error: '',
        login: action.payload,
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
