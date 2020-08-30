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
import ResultPage from '../ResultPage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../SignUpForm';
import Details from "../Details";
import Carnet from "../Carnet";
import SearchBar from '../SearchBar';
import MonVoyage from '../MonVoyage';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');

  const data = {
    ville: 'Clermont-Ferrand',
    description: "C'est une description",
    horaire: '18h-20H',
  };

  return (
    <div className="app">
      <Header />

      <Switch>
        <Route exact path="/">
          <SearchBar />
          <HomePage />
        </Route>
        <Route exact path="/result">
          <ResultPage />
        </Route>
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up">
          <SignUpForm
            handleChange={setSearch}
          />
        </Route>
        <Route exact path="/result">
          <Result />
        </Route>
        <Route path="/details" component={() => <Details data={data} />} />

        <Route path="/carnet" component={() => <Carnet data={data} />} />
        <Route>
          <MonVoyage />
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
