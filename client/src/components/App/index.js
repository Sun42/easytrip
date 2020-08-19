// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css'

// == Import

//Composants
import Header from '../Header';
import Footer from '../Footer';
import ResultPage from '../ResultPage';


import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <ResultPage />
    <Footer />
  </div>
);

// == Export
export default App;
