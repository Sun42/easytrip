import React from 'react';
import './style.scss';

const Login = () => {
  console.log(Login);
  return (
    <div className="settings">
      <form className="settings-form">
        <input
          name="email"
          type="email"
          placeholder="email"
          value=""
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value=""
        />
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default Login;
