import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

// router
import { Link } from 'react-router-dom';

// semantic-ui
import { Button, Icon } from 'semantic-ui-react';

// Styles and react-icons
import './styles.scss';
import { FaHeart, FaHeartBroken, FaRegCheckSquare, FaTrashAlt } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

const MonVoyage = ({ 
  activities, handleActivityDone, handleFavActivity, 
  handleDeleteActivity, trip 
}) => {

  // momentObject converter
  const formatedStartDate = moment(trip.date_departure).format('DD/MM/YYYY');
  const formatedEndDate = moment(trip.date_return).format('DD/MM/YYYY');

  return (
  <div className="wrapper">
    <div className="button">
      <Link to={'/carnets'}>
        <Button animated>  
          <Button.Content visible>Mes carnets</Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Link>
    </div>
    <div className="trip-info">
      <h2>{trip.name}</h2>
      <h3>{trip.city}</h3>
      <div className="trip-info-dates">
        <span>{formatedStartDate} - {formatedEndDate}</span>
      </div>
    </div>
    <div className="trip-list">

    {
      activities.map((activity) => {
        const goodClass = activity.done ? "activity activity--done" : "activity";
        return (
          <li key={activity.id} className={goodClass}>
            <div className="left-side">
              <span
                onClick={() => {
                  handleActivityDone(activity.id);
              }}
              >
                {activity.done ? <FaRegCheckSquare size={22} /> : <MdCheckBoxOutlineBlank size={22} />}
              </span>
              <span>{activity.name}</span>
            </div>
            
            <div className="right-side">
              <span
                onClick={() => {
                  handleFavActivity(activity.id);
                }}
              >
                {activity.favori ? <FaHeart size={22} /> : <FaHeartBroken size={22} />}
              </span>
            
              <span
                onClick={() => {
                  console.log('id activity au click', activity.id);
                  handleDeleteActivity(activity.id);
              }}
              >
                <FaTrashAlt size={22} />
              </span>
            </div>
          </li>
        )
      })
    }
  </div>
</div>
)};

MonVoyage.propTypes = {
  handleActivityDone: PropTypes.func.isRequired,
  handleFavActivity: PropTypes.func.isRequired,
  handleDeleteActivity: PropTypes.func.isRequired,
};

export default MonVoyage;
