export const CHECK_AUTH = 'CHECK_AUTH';
export const CHANGE_FIELD = 'CHANGE_FIELD';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const SIGNUP_CHANGE_INPUT = 'CREATE_ACCOUNT_CHANGE_INPUT';
export const SIGNUPFORM = 'SIGNUPFORM';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';

export const checkAuth = () => ({
  type: CHECK_AUTH,
});

export const loginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const loginError = (payload) => ({
  type: LOGIN_ERROR,
  payload,
});

export const changeField = (payload) => ({
  type: CHANGE_FIELD,
  payload,
});

export const login = () => ({
  type: LOGIN,
});

export const logout = () => ({
  type: LOGOUT,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});


// modifs faites par Sarah avec aide doc pour inscription
export const signupForm = () => ({
  type: SIGNUPFORM,
});

export const signupFailed = () => ({
  type: SIGNUP_FAILED,
});

export const signupSuccess = () => ({
  type: SIGNUP_SUCCESS
});

export const signupChangeInput = (payload) => ({
  type: SIGNUP_CHANGE_INPUT,
  payload,
});
