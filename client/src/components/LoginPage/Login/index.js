import React from 'react';
import './style.scss';

const Login = ({
  handleChangePassword, password, handleChangeEmail, email,
}) => (
  <div className="settings">
    <form className="settings-form">
      <input
        name="email"
        type="email"
        placeholder="email"
        value={email}
        onChange={(evt) => {
          const text = evt.target.value;
          handleChangeEmail(text);
          console.log('je suis le mail');
        }}
      />
      <input
        name="password"
        type="password"
        placeholder="password"
        value={password}
        onChange={(evt) => {
          const text = evt.target.value;
          handleChangePassword(text);
          console.log('je suis le mot de passe');
        }}
      />
      <button type="submit">Se connecter</button>
    </form>
  </div>
);

export default Login;
