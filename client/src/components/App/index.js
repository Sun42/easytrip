
// == Import npm
import React from 'react';

// == Import
import './styles.css';



// Composants
import Header from '../Header';
import Footer from '../Footer';
import Details from '../Details';


// == Composant
const App = () => (
  <div className="app">
    <Header />
    <Details ville={"Clermont-Ferrand"} paragraph={"description"}/>
    <Footer />
    
  </div>
);

// == Export
export default App;
