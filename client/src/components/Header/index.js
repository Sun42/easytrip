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
  loggedMessage, handleGetUserAllTrips, handleLogout}) => (

  <div className="header">
    <Link to="/">  
      <img className="logo" src={Logo} alt="name of the page" />
    </Link>

    <div className="login">
  
    {isLogged && (
      <div className="buttons-rounds">
      <ModalAddTrip />
        <NavLink exact to='/carnets'>
        <Button
          circular
          icon="suitcase"
          color="orange"
          size="large"
          onClick={() => {
            handleGetUserAllTrips();
          }}
        />
        </NavLink>
      
      <NavLink exact to='/'> 
      <Button
        circular
        icon= "sign-out"
        color="orange"
        size="large"
        onClick={() => {
          handleLogout();
        }}
        />
      </NavLink>
      
      </div>

      
    )}
        

         {!isLogged && (
           <div className="buttons-rectangulars">
      <NavLink exact to="/login">
        <Button animated>
          <Button.Content visible>Connexion</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow right" />
          </Button.Content>
        </Button>
      </NavLink>
      
      <NavLink exact to="/sign-up">
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
  </div>
);

Header.propTypes = {
  isLogged: PropTypes.bool,
  loggedMessage: PropTypes.string,
  handleGetUserAllTrips: PropTypes.func,
  handleLogout: PropTypes.func,
};
Header.defaultProps = {
  isLogged: true,
  loggedMessage: 'Connecté',
};

export default Header;
