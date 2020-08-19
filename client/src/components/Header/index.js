import React from 'react';

// Styles
import './styles.scss';

const Header = () => (
  <div className="header">
    <h1>EasyTrip</h1>
    <div className="login">
      <button>Connexion</button>
      <button>Inscription</button>
    </div>
  </div>
);

export default Header;