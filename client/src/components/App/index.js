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
import SignUpForm from '../../containers/SignUpForm';
import Details from '../Details';
import Carnet from '../Carnet';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');

  const data = {
    ville: "Clermont-Ferrand",
    description: "C'est une description",
    horaire: "18h-20H",
  };

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/">
          <SearchBar search={search} handleChange={setSearch} />
          <HomePage />
        </Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up">
          <SignUpForm
            component={SignUpForm}
          />
        </Route>
        <Route exact path="/resultats">
          <Result />
        </Route>
        <Route path="/resultats/details">
          <Details data={data} />
          </Route>

        <Route path="/carnet">
          <Carnet data={data} />
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
