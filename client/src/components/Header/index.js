import React from 'react';

// router
import { NavLink, Link } from 'react-router-dom';


import PropTypes from 'prop-types';

// semantic-ui
import { Button, Icon } from 'semantic-ui-react';

// Styles
import './styles.scss';
import Logo from '../../assets/newLogo.PNG';

// composants
import ModalAddTrip from '../../containers/ModalAddTrip';

const Header = ( {isLogged,
  loggedMessage,}) => (

  <div className="header">
    <Link className="active" to="/">  
      <img className="logo" src={Logo} alt="name of the page" />
    </Link>

    <div className="login">
  
    {isLogged && (
      <div>
      <ModalAddTrip />
        <NavLink to='/carnets'>
        <Button
          circular
          icon="suitcase"
          color="orange"
          size="large"
        />
        </NavLink>
      </div>
        )}
         </div>

         {!isLogged && (
           <div>
      <NavLink to="/login">
        <Button animated>
          <Button.Content visible>Connexion</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>
      
      <NavLink to="/sign-up">
        <Button animated>
          <Button.Content visible>Inscription</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>
      </div>
         )}
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
