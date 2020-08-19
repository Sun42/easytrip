import React from 'react';

// Styles
import './styles.scss';
import Logo from '../../assets/logo.png'

const Header = () => (
  <div className="header">
    <img className="logo" src={Logo} alt="ourlogo" />
    <div className="login">
      <button>Connexion</button>
      <button>Inscription</button>
    </div>
  </div>
);

export default Header;
