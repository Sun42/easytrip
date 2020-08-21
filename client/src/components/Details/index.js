import React from 'react';

// Styles
import Img from '../../assets/clermont.jpg'
import './styles.scss';



const Details = ({ville, paragraph}) => (
  <div className="details">
    <div className='activity_detail'>
      <h1 className="title">{ville}</h1> <br/>
      <div className="paragraphs">
      <p>{paragraph}</p>  
     </div>
    </div>
    <div className='activity_picture'>
      <img className="photo" src={Img} alt="clermont" />
    </div>
  </div>
);

export default Details;
