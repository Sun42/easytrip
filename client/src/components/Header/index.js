import React from 'react';

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// Styles
import './styles.scss';

const Header = ({
  isLogged,
  loggedMessage,
}) => (
  <div className="header">
    <div>
      <NavLink activeClassName="active" to="/"><h1>EasyTrip</h1></NavLink>
    </div>
    <div className="login">
      {isLogged && (
        <div className="login-form-logged">
          <p className="login-form-message">
            {loggedMessage}
          </p>
          <button
            type="button"
            className="login-form-button"
          >
            Carnet de voyage
          </button>
        </div>
      )}
      {!isLogged && (
        <div>
          <NavLink activeClassName="active" to="/Login">Connexion</NavLink>
          <NavLink activeClassName="active" to="/sign-up">Inscription</NavLink>
        </div>
      )}
    </div>
  </div>

);
Header.propTypes = {
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
};
Header.defaultProps = {
  isLogged: true,
  loggedMessage: 'Connecté',
};
export default Header;
