import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// semantic-ui
import { Card, Icon, Button } from 'semantic-ui-react'

// Styles
import "./styles.scss";

const Carnet = ( {carnet, handleGetUserAllActivities} ) => {
  return (
  <div className="wrapper">
    <div className="title">
      <h1>Mes voyages</h1>
    </div>
    <div className="trips">
    <Card.Group>
      {
      carnet.length > 0 
      && carnet.map((trip) => {
          return <Trip key={trip.id} {...trip} handleGetUserAllActivities={handleGetUserAllActivities} />;
        })
      }
      </Card.Group>
    </div>
    <div className="button">
      <Link to={'/result'}>
        <Button>
          Result
        </Button>
      </Link>
    </div>
  </div>
)};

const Trip = ( { city, date_departure, date_return, name, id, handleGetUserAllActivities } ) => {
  return (
    <div className="trip">
    <Card>
      <Card.Content>
        <Card.Header>
          <Icon 
          name="suitcase"
          floated="right"
        />
          {name}
          </Card.Header>
        <Card.Meta>{city}</Card.Meta>
        <Card.Description>
          {date_departure} - {date_return}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Link to={`/carnets/${id}`}>
          <Button 
            basic 
            color='green'
            onClick={() => {
              handleGetUserAllActivities({id});
            }}
            >
            Détails
          </Button>
          </Link>
          <Button basic color='red'>
            Supprimer
          </Button>
        </div>
      </Card.Content>
    </Card>
  </div>
  )
};

Carnet.propTypes = {
  carnet: PropTypes.arrayOf(PropTypes.object.isRequired),
  handleGetUserAllActivities: PropTypes.func,
};

Trip.propTypes = {
  name: PropTypes.string,
  destination: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
}

export default Carnet;
