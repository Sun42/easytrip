import React from 'react';

// React router
import { Link } from 'react-router-dom';

// Styles
import Img from '../../assets/clermont.jpg';
import './styles.scss';

const Details = ({ ville, paragraph }) => (
  <div className="details">
    <div className="activity_detail">
      <h1 className="title">{ville}</h1> <br />
      <div className="paragraphs">
        <p>{paragraph}</p>
      </div>
    </div>
    <div className="activity_picture">
      <img className="photo" src={Img} alt="clermont" />
    </div>
    <Link to="/resultats/">
      <button className="backToList button">
        Liste d'activités
      </button>
    </Link>
  </div>
);

export default Details;
