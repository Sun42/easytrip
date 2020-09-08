import {
  CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS, LOGIN, LOGOUT, SIGNUPFORM, SIGNUP_FAILED, SIGNUP_SUCCESS,
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
        loggedMessage: `Bienvenue`,
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
        loggedMessage: action.payload,
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
        isLogged: false,
        error: '',
        ...action.payload,

      }
      case SIGNUP_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        name: '',
        surName: '',
        error: '',
        login: action.payload,
        
      };
      case SIGNUP_FAILED:
          return {
            ...state,
            password: '',
            error: action.payload,
            loggedMessage: action.payload,
            login: {},
            isLogged: false,
          };
    default:
      return state;
  }
};
