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


// router
import { NavLink } from 'react-router-dom';

// semantic-ui
import { Button, Icon } from 'semantic-ui-react';

// Styles
import './styles.scss';
import Logo from '../../assets/newLogo.PNG';

// composants
import ModalAddTrip from '../../containers/ModalAddTrip';

const Header = () => (
  <div className="header">
    <img className="logo" src={Logo} alt="name of the page" />
    <div className="login">
      <ModalAddTrip />
      <NavLink to="/login">
        <Button
          circular
          icon="suitcase"
          color="orange"
          size="large"
        />
      </NavLink>
      <NavLink to="/login">
        <Button animated>
          <Button.Content visible>Connexion</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button
          circular
          icon="user"
          color="black"
          size="large"
        />
      </NavLink>
      <NavLink to="/inscription">
        <Button animated>
          <Button.Content visible>Inscription</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>

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
