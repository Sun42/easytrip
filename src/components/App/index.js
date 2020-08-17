// == Import npm
import React from 'react';

// == Import
import Login from '../Login';
import Header from '../Header';
import Footer from '../Footer';


import './styles.css';

// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Login />
    <Footer />
  </div>
);

// == Export
export default App;
