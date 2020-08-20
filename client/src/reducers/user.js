import {
  CHANGE_FIELD, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS,
} from '../store/action/user-actions';

const stateInitial = {
  email: 'nawal@easytrip.com',
  password: 'nawal',
  isLogged: false,
  loggedMessage: 'Bienvenue',
  error: '',
  user: {},
};

export default (state = stateInitial, action = {}) => {
  switch (action.type) {
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLogged: false,
        user: {},
        loggedMessage: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        email: '',
        password: '',
        error: '',
        user: action.payload,
        loggedMessage: `Bienvenue ${action.payload.username}`,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        password: '',
        error: action.payload,
        loggedMessage: '',
        user: {},
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
