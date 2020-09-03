import {
  CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGIN, LOGOUT, SIGNUPFORM
} from '../store/action/login-actions';

const stateInitial = {
  email: '',
  password: '',
  name: '',
  surName: '',
  isLogged: false,
  loggedMessage: `Bienvenue `,
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
        login : {},
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        error: '',
        login: action.payload,
        loggedMessage: `Bienvenue ${action.payload.name}`,
      };
    case LOGIN:
      return {
        ...state,
        isLogged: true,
        error: '',
        login: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        password: '',
        error: action.payload,
        loggedMessage: 'vous n\'avez pas le bon identifiant',
        login: {},
        isLogged: false,
      };
    case CHANGE_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case SIGNUPFORM:
      return {
        ...state,
        //isLogged: true,
        error: '',
        ...action.payload,

      }

    default:
      return state;
  }
};
