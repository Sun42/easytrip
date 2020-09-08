import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

// fonction slugify > utils
import { slugifyNameCarnet } from '../../utils';

// semantic-ui AND react-icons/fa
import { Icon, Button } from 'semantic-ui-react'
import { FaTrashAlt } from 'react-icons/fa';

// Styles
import "./styles.scss";

const Carnet = ({ 
  carnet, handleGetUserAllActivities, handleDeleteTravelogue 
}) => {
  return (
  <div className="wrapper">
    <div className="button">
      <Link to={'/result'}>
        <Button animated>  
          <Button.Content visible>Recherche</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </div>
    <div className="title">
      <h1>Mes voyages</h1>
    </div>
    <div className="trips">
      {
      carnet.length > 0 
      && carnet.map((trip) => {
          return <Trip key={trip.id} {...trip} handleGetUserAllActivities={handleGetUserAllActivities} 
          handleDeleteTravelogue={handleDeleteTravelogue} />;
        })
      }
    </div>

  </div>
)};

const Trip = ({ city, date_departure, date_return, name, id, 
  handleGetUserAllActivities, handleDeleteTravelogue 
}) => {

  // momentObject converter
  const formatedStartDate = moment(date_departure).format('DD/MM/YYYY');
  const formatedEndDate = moment(date_return).format('DD/MM/YYYY');

  return (
    <div className="trip">

      <div className="trip-info">
        <h3>
          <Icon 
            name="suitcase"
            floated="right"
          />
          {name}
        </h3>
        <h4>{city}</h4>
        <p>{formatedStartDate} - {formatedEndDate}</p>
      </div>

      <div className='trip-buttons'>
        <Link to={slugifyNameCarnet(name)}>
          <Button 
            onClick={() => {
              handleGetUserAllActivities({id});
            }}
            >
            Voir les activités
          </Button>
        </Link>
          <button 
            onClick={() => {
              handleDeleteTravelogue({id});
            }}
            >
            <FaTrashAlt size={29} />
          </button>
      </div>
  </div>
  )
};

Carnet.propTypes = {
  carnet: PropTypes.arrayOf(PropTypes.object.isRequired),
  handleGetUserAllActivities: PropTypes.func,
  handleDeleteTravelogue: PropTypes.func,
};

Trip.propTypes = {
  name: PropTypes.string,
  destination: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

export default Carnet;
