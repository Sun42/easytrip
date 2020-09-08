import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Flip} from 'react-toastify';

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
const App = ({ isLogged, checkAuth, carnet }) => {
  useEffect(() => {
    checkAuth();

  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <div className="app">
       <ToastContainer
      position="top-right"
      autoClose={1800}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      transition={Flip}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName="toast"
    />
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
        <Route exact path="/carnets/:slug" component={MonVoyage} />

        {/* login page */}
        <Route exact path="/login">
          { isLogged ? <Redirect to="/result" /> : <LoginForm />}
        </Route>
        <Route exact path="/sign-up" component={SignUpForm}>
        { isLogged ? <Redirect to="/result" /> : <SignUpForm />}
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
