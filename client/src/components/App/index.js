import React, { useState, Component } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
// == Import

import './styles.css';
import 'semantic-ui-css/semantic.min.css';

import Footer from '../Footer';
import Header from '../Header';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import Result from '../Result';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../SignUpForm';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up">
          <SignUpForm
            handleChange={setSearch}
          />
        </Route>
        <Route exact path="/resultats">
          <Result />
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
