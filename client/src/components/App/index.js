import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// == Import

import './styles.css';
import 'semantic-ui-css/semantic.min.css'


import Footer from '../Footer';
import Header from '../Header';
import HomePage from '../HomePage';
import Login from '../LoginPage/Login';
import NotFound from '../NotFound';
import ResultPage from '../ResultPage';

// == Composant
const App = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/Login">
          <Login
            email={email}
            handleChangeEmail={setEmail}
            password={password}
            handleChangePassword={setPassword}
          />
        </Route>
        <Route path="/result">
          <ResultPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

// == Export
export default App;
