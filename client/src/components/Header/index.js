import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./styles.scss";
import Logo from "../../assets/logo.png";

const Header = () => (
  <div className="header">
    <img className="logo" src={Logo} alt="clermont" />
    <div className="login">
      <Link to="/login">
        <button className="button">Connexion</button>
      </Link>
      <Link to="/login">
        <button className="button">Inscription</button>
      </Link>
    </div>
  </div>
);

export default Header;
