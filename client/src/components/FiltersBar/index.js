/* eslint-disable padded-blocks */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

// import des autres composants
import SearchBar from '../../containers/SearchBar';

const FiltersBar = ({
  handleToggleFood, handleToggleArt, handleTogglePub, handleToggleExcursion,
  handleToggleShop, handleToggleAcquatic, handleToggleFun, handleToggleHistoric,
  myTrips, handleTripID, handleUserAllTrips, 
}) => {

  useEffect(() => {
    console.log('useffecttttt');
    handleUserAllTrips();
  }, []);


  return (

    <div className="filtersbar">
      <div className="destination">
        <p>Selectionner votre destination</p>
        <SearchBar />
      </div>
      <div className="dates">
        <p><label htmlFor="carnet">Selectionnez votre carnet :</label></p>
        <div className="calendar">
        <select name="trip" id="trip-select">
          <option value="">--Selectionnez votre carnet--</option>
        {
          myTrips.map((trip) => {
            return (
            <option 
              key={trip.id}
              value={trip.name}
              onClick={() => {
                // handleTripID(trip.id);
                console.log(trip.id);
              }}
            >
              {trip.name}</option>
            )
          })
        }
        </select>
        </div>
      </div>

      <div className="preferences">
        <form>
          <p>Mes préférences : </p>
          <div className="form">
            <div className="form-col1">
              <div>
                <label htmlFor="food">Gastronomie : </label>
                <input
                  type="checkbox"
                  id="food"
                  name="food"
                  onClick={() => {
                      handleToggleFood();
                  }}
                />
              </div>
              <div>
                <label htmlFor="art">Culture / Art : </label>
                <input
                  type="checkbox"
                  id="art"
                  name="art"
                  onClick={() => {
                      handleToggleArt();
                  }}
                />
              </div>
              <div>
                <label htmlFor="pub">Bars : </label>
                <input
                  type="checkbox"
                  id="pub"
                  name="pub"
                  onClick={() => {
                      handleTogglePub();
                  }}
                />
              </div>
              <div>
                <label htmlFor="excursion">Promenades / Randonnées : </label>
                <input
                  type="checkbox"
                  id="excursion"
                  name="excursion"
                  onClick={() => {
                      handleToggleExcursion();
                  }}
                />
              </div>
            </div>
            <div className="form-col2">
              <div>
                <label htmlFor="shop">Shopping : </label>
                <input
                  type="checkbox"
                  id="shop"
                  name="shop"
                  onClick={() => {
                      handleToggleShop();
                  }}
                />
              </div>
              <div>
                <label htmlFor="acquatic">Activités aquatiques : </label>
                <input
                  type="checkbox"
                  id="acquatic"
                  name="acquatic"
                  onClick={() => {
                      handleToggleAcquatic();
                  }}
                />
              </div>
              <div>
                <label htmlFor="fun">Spectacles / Concerts : </label>
                <input
                  type="checkbox"
                  id="fun"
                  name="fun"
                  onClick={() => {
                      handleToggleFun();
                  }}
                />
              </div>
              <div>
                <label htmlFor="historic">Monuments historiques : </label>
                <input
                  type="checkbox"
                  id="historic"
                  name="historic"
                  onClick={() => {
                      handleToggleHistoric();
                  }}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

FiltersBar.propTypes = {
  handleToggleFood: PropTypes.func.isRequired,
  handleToggleArt: PropTypes.func.isRequired,
  handleTogglePub: PropTypes.func.isRequired,
  handleToggleExcursion: PropTypes.func.isRequired,
  handleToggleShop: PropTypes.func.isRequired,
  handleToggleAcquatic: PropTypes.func.isRequired,
  handleToggleFun: PropTypes.func.isRequired,
  handleToggleHistoric: PropTypes.func.isRequired,
  handleTripID: PropTypes.func,
  handleUserAllTrips: PropTypes.func,
};

export default FiltersBar;
