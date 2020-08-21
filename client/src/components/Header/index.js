import React from 'react';
import { NavLink } from 'react-router-dom';

// Styles
import './styles.scss';

const Header = () => (
  <div className="header">
    <h1>EasyTrip</h1>
    <NavLink activeClassName="active" to="/">Home</NavLink>
    <div className="login">
      <NavLink activeClassName="active" to="/Login">Connexion</NavLink>
      <NavLink activeClassName="active" to="/Login">Inscription</NavLink>


    </div>
  </div>
);
export default Header;
