import React from 'react';
import { Route, Switch } from 'react-router-dom';

// == Import
import './styles.css';
import 'semantic-ui-css/semantic.min.css';

// == Composants - imports
import Footer from '../Footer';
import Header from '../../containers/Header';
import HomePage from '../HomePage';
import NotFound from '../NotFound';
import Result from '../Result';
import ResultPage from '../ResultPage';
import LoginForm from '../../containers/LoginForm';
import SignUpForm from '../../containers/SignUpForm';
import Carnet from "../../containers/Carnet";
import MonVoyage from "../../containers/MonVoyage";
import SearchBar from '../SearchBar';

// == Composant
const App = () => {

  return (
    <div className="app">
      <Header />
      <Switch>

        {/* homepage */}
        <Route exact path="/">
          <SearchBar />
          <HomePage />
        </Route>

        {/* result page */}
        <Route exact path="/result">
          <ResultPage />
        </Route>

        {/* les carnets */}
        <Route exact path="/carnets">
          <Carnet />
        </Route>

        {/* login page */}
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/sign-up">
          <SignUpForm
            component={SignUpForm}
          />
        </Route>

        {/* result page */}
        <Route exact path="/result">
          <Result />
        </Route>

        {/* trip details page */}
        <Route exact path="/mytrip">
          <MonVoyage />
        </Route>

        {/* error */}
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
