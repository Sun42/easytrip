import React from 'react';
import PropTypes from 'prop-types';

// Styles
import './styles.scss';

const MonVoyage = ({ destination, destination2 }) => (
  <div className="wrapper">
    <div className="trip-info">
      <img src="https://www.aquatique-vacances.com/media/9258/initial/plage-etretat-falaises-amont-aval.jpg" alt="etretat" />
      <h3>{destination}</h3>
      <h4>Les dates</h4>
    </div>
    <div className="trip-list">
      <p>Activité</p>
    </div>
  </div>
);

MonVoyage.propTypes = {
  destination: PropTypes.string.isRequired,
};

export default MonVoyage;
