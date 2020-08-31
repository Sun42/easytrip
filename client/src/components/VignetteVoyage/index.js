import React from "react";
import { Link } from 'react-router-dom';

function VignetteVoyage({ dataVoyage }) {
  return (
    <div className="vignette-voyage">
      <h3>{dataVoyage.ville}</h3>
      <p>{dataVoyage.description}</p>
      <Link to="/monvoyage">
        <button type="button">Détail</button>
      </Link>
    </div>
  );
}

export default VignetteVoyage;
