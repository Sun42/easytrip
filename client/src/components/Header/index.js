import React from 'react';

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

export default Header;
