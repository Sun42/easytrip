import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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
      <div className="settings-image">
        <img src="https://www.bnc.ca/content/dam/fragment/images/Fotolia-79030524-Subscription-Monthly-M-1-e1481143505131.jpg" alt="" />
      </div>
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
          <h2>Identifiez-vous</h2>
          <p>email</p>
          <Field
            name="email"
            onChange={changeField}
            placeholder=""
            value={email}
          />
          <p>mot de passe</p>

          <Field
            name="password"
            type="password"
            onChange={changeField}
            placeholder=""
            value={password}
          />
          <button
            type="submit"
            className="login-form-button"
            onClick="submit"
          >
            OK
          </button>
          <NavLink activeClassName="active" to="/sign-up">
            <span>vous n'avez pas de compte ?</span>
          </NavLink>
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
  isLogged: true,
  loggedMessage: 'Connecté',
};

export default LoginForm;
