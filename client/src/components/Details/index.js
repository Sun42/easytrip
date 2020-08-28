import React from "react";

// Styles
import Img from "../../assets/clermont.jpg";
import "./styles.scss";

const Details = ({ data }) => (
  <div className="detail_page">
    <div className="details">
      <div className="activity_detail">
        <button className="button Add">Ajouter à mon carnet</button>
        <h1 className="title">{data.ville}</h1> <br />
        <div className="paragraphs">
          <p>{data.description}</p>
        </div>
      </div>
      <div className="activity_picture">
        <img className="photo" src={Img} alt="clermont" />
      </div>
    </div>
    <button className="backToList button">Liste d'activités</button>
  </div>
);

export default Details;
