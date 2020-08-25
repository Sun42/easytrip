import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Field from './Field.js';
// import { useField } from './hooks';

// import './style.scss';

const SignUp = ({
  email,
  password,
  changeField,
  name,
  lastName,
  birthDate,
}) => {
  console.log(SignUp);

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
        <form method="post" autoComplete="off" className="login-form-element" onSubmit={handleSubmit}>
          <h2>Inscrivez-vous</h2>

          <p>Nom</p>

          <Field
            name="name"
            onChange={changeField}
            placeholder=""
            value={name}
          />
          <p>Prenom</p>

          <Field
            name="lastName"
            type="password"
            onChange={changeField}
            placeholder=""
            value={lastName}
          />
          <p>date de naissance</p>

          <Field
            name="date de naissance"
            type="date de naissance"
            onChange={changeField}
            placeholder=""
            value={birthDate}
          />

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
            Valider mon incription
          </button>
          <NavLink activeClassName="active" to="/login">
            <span>vous avez deja un compte ?</span>
          </NavLink>
        </form>

      </div>
    </div>
  );
};

SignUp.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,

};

export default SignUp;
