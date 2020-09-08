import React, { useState } from "react";
import {  Link } from 'react-router-dom';
import "./styles.scss";

const NotFound = () => {
  const [opened, setOpened] = useState(true);
 
  return (
    <div className="not-found">
      <h2
        onClick={() => {
          setOpened(!opened);
        }}
      >
        404
      </h2>
      <p>Désolé, cette page n'existe pas</p>
      {opened && (
        <Link to="/">  
        <img src="la-bouee-de-secours-ou-de-sauvetage-13371-720-0.jpg" alt="" />
        </Link>
      )}
    </div>
  );
};
export default NotFound;
