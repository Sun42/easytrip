import React from "react";

// Styles
import "./styles.scss";
import VignetteVoyage from "../VignetteVoyage";
const datavoyage = [
  {
    ville: "peu-importe",
    description: "description",
  },
  {
    ville: "peu-importe 2",
    description: "description 2",
  },
];

const Carnet = () => (
  <>
    <h1 className="titre-voyages">Mes voyages</h1>
    <div className="mes-voyages">
      {datavoyage.map((voyage) => (
        <VignetteVoyage dataVoyage={voyage} />
      ))}
    </div>
  </>
);

export default Carnet;
