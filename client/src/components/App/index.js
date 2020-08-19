import React, { useState } from 'react';
import axios from 'axios';
import { Route, Switch, Redirect } from 'react-router-dom';
// == Import

import './styles.css';
import 'semantic-ui-css/semantic.min.css'


import Footer from '../Footer';
import Header from '../Header';
import HomePage from '../HomePage/HomePage';
import Login from '../LoginPage/Login';
import NotFound from '../NotFound';
import ResultPage from '../ResultPage';
import SearchBar from '../SearchBar';

// == Composant
const App = () => {
  const [search, setSearch] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="app">
      <Header />
     <ResultPage />
      <Switch>
        <Route exact path="/">
          <SearchBar
            search={search}
            handleChange={setSearch}
          />
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
