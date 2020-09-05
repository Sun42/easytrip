import React from 'react';
import PropTypes from 'prop-types';

// router
import { Link } from 'react-router-dom';

// semantic-ui
import { Button } from 'semantic-ui-react';

// Styles and react-icons
import './styles.scss';
import { FaHeart, FaHeartBroken, FaRegCheckSquare, FaTrashAlt } from 'react-icons/fa';
import { MdCheckBoxOutlineBlank } from 'react-icons/md';

const MonVoyage = ({ activities, handleActivityDone, handleFavActivity, handleRemoveActivity }) => {
  return (
  <div className="wrapper">
    <div className="trip-info">
      <h3>Voyage</h3>
      <h4>Destination</h4>
      <h5>Les dates</h5>
    </div>
    <div className="trip-list">

    {
      activities.map((activity) => {
        const goodClass = activity.done ? "activity activity--done" : "activity";
        return (
          <li key={activity.id} className={goodClass}>
            <span>{activity.label}</span>
            <div className="icons">
            <span
              onClick={() => {
                handleFavActivity(activity.id);
              }}
            >
              {activity.favori ? <FaHeart size={22} /> : <FaHeartBroken size={22} />}
            </span>

            <span
              onClick={() => {
                handleActivityDone(activity.id);
            }}
            >
              {activity.done ? <FaRegCheckSquare size={22} /> : <MdCheckBoxOutlineBlank size={22} />}
            </span>
            
            <span
              onClick={() => {
                handleRemoveActivity(activity.id);
            }}
            >
              <FaTrashAlt size={22} />
            </span>
            </div>
          </li>
        )
      })
    }

    <div className="button">
      <Link to={'/carnets'}>
        <Button>
          Carnet
        </Button>
      </Link>
    </div>
  </div>
</div>
)};

MonVoyage.propTypes = {
  handleActivityDone: PropTypes.func.isRequired,
  handleFavActivity: PropTypes.func.isRequired,
  handleRemoveActivity: PropTypes.func.isRequired,
};

export default MonVoyage;
