import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './styles.scss';

const Header = () => (
  <div className="header">
    <div>
      <NavLink activeClassName="active" to="/"><h1>EasyTrip</h1></NavLink>
    </div>
    <div className="login">
      <NavLink activeClassName="active" to="/Login">Connexion</NavLink>
      <NavLink activeClassName="active" to="/sign-up">Inscription</NavLink>

    </div>
  </div>
);
export default Header;
