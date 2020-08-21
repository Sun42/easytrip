import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
// import { useField } from './hooks';

import './style.scss';

const LoginForm = ({
  email,
  password,
  changeField,
  handleLogin,
  handleLogout,
  isLogged,
  loggedMessage,
}) => {
  console.log(LoginForm);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  return (
    <div className="settings">
      <div className="login-form">
        {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
            onClick={handleLogout}
          >
            Déconnexion
          </button>
        </div>
        )}
        {!isLogged && (

        <form method="post" autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <Field
            name="email"
            onChange={changeField}
            placeholder="email"
            value={email}
          />
          <Field
            name="password"
            type="password"
            onChange={changeField}
            placeholder="Mot de passe"
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
            onClick="submit"
          >
            OK
          </button>
        </form>
        )}
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleLogout: PropTypes.func.isRequired,
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};

LoginForm.defaultProps = {
  isLogged: false,
  loggedMessage: 'Connecté',
};

export default LoginForm;
