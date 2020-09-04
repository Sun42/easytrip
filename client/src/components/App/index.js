import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css';

// == Composants - imports
import Footer from '../Footer';
import Header from '../../containers/Header';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import ResultPage from '../ResultPage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import Carnet from "../../containers/Carnet";
import MonVoyage from "../../containers/MonVoyage";

// == Composant
const App = ({isLogged, checkAuth}) => {
  useEffect(() => {
    checkAuth();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="app">
      <Header />
      <Switch>

        {/* homepage */}
        <Route exact path="/">
          <HomePage />
        </Route>

        {/* result page */}
        <Route exact path="/result">
          <ResultPage />
        </Route>

        {/* all carnets page */}
        <Route exact path="/carnets">
          <Carnet />
        </Route>

        {/* trip details page */}
        <Route exact path="/mytrip">
          <MonVoyage />
        </Route>

        {/* trip details page */}
        {/* <Route exact path="/carnets/:id">
          <MonVoyage />
        </Route> */}

        {/* login page */}
        <Route exact path="/login">
    { isLogged ? <Redirect to="/" /> : <LoginForm />}
 </Route>
        <Route exact path="/sign-up">
        { isLogged ? <Redirect to="/" /> : <SignUpForm component={SignUpForm} />}
        
        </Route>

        {/* error page */}
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
