import React from "react";

function VignetteVoyage({ dataVoyage }) {
  return (
    <div className="vignette-voyage">
      <h3>{dataVoyage.ville}</h3>
      <p>{dataVoyage.description}</p>
      <button>Détail</button>
    </div>
  );
}

export default VignetteVoyage;
