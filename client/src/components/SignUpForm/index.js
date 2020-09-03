import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Field from './Field.js/index.js';
// import { useField } from './hooks';

// import './style.scss';

const SignUpForm = ({ // modif Sarah
  email,
  password,
  changeField,
  handleSignUp,
  name,
  surName,
  isLogged,
  errorMessage,
}) => {
  console.log(SignUpForm);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSignUp();
  };

  return (
    <div className="settings">
      <div className="settings-image">
        <img src="https://www.bnc.ca/content/dam/fragment/images/Fotolia-79030524-Subscription-Monthly-M-1-e1481143505131.jpg" alt="" />
      </div>
      <div className="login-form">
      {!isLogged && (
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
            name="surName"
            onChange={changeField}
            placeholder=""
            value={surName}
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
          <Link activeClassName="active" to="/login">
            <span>vous avez deja un compte ?</span>
          </Link>
          </form>)}

      </div>

    </div>
  );
};

SignUpForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surName: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,

};

export default SignUpForm;
