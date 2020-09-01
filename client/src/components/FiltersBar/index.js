/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Calendar
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

// styles
import './styles.scss';

// import des autres composants
import SearchBar from '../../containers/SearchBar';

const FiltersBar = ({
  handleAddFood, handleAddArt, handleAddPub, handleAddExcursion,
  handleAddShop, handleAddAcquatic, handleAddFun, handleAddHistoric,
  handleRemoveFood, handleRemoveArt, handleRemovePub, handleRemoveExcursion,
  handleRemoveShop, handleRemoveAcquatic, handleRemoveFun, handleRemoveHistoric,
}) => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [focus, setFocus] = useState(null);

  const { startDate, endDate } = dateRange;

  const handleOnDateChange = (startDate, endDate) => setDateRange(startDate, endDate);

  return (

    <div className="filtersbar">
      <div className="destination">
        <p>Selectionner votre destination</p>
        <SearchBar />
      </div>
      <div className="dates">
        <p>Selectionner vos dates</p>
        <div className="calendar">

          <DateRangePicker
            startDatePlaceholderText="Départ"
            startDate={startDate}
            onDatesChange={handleOnDateChange}
            endDatePlaceholderText="Retour"
            endDate={endDate}
            numberOfMonths={1}
            displayFormat="DD/MM/YYYY"
            showClearDates
            focusedInput={focus}
            onFocusChange={(focus) => setFocus(focus)}
            startDateId="startDateMookh"
            endDateId="endDateMookh"
            minimumNights={0}
            showDefaultInputIcon
          />
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
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddFood();
                    }
                    else {
                      handleRemoveFood();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="culture_art">Culture / Art : </label>
                <input
                  type="checkbox"
                  id="art"
                  name="art"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddArt();
                    }
                    else {
                      handleRemoveArt();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="pub">Bars : </label>
                <input
                  type="checkbox"
                  id="pub"
                  name="pub"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddPub();
                    }
                    else {
                      handleRemovePub();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="excursion">Promenades / Randonnées : </label>
                <input
                  type="checkbox"
                  id="excursion"
                  name="excursion"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddExcursion();
                    }
                    else {
                      handleRemoveExcursion();
                    }
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
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddShop();
                    }
                    else {
                      handleRemoveShop();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="acquatic">Activités aquatiques : </label>
                <input
                  type="checkbox"
                  id="acquatic"
                  name="acquatic"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddAcquatic();
                    }
                    else {
                      handleRemoveAcquatic();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="fun">Spectacles / Concerts : </label>
                <input
                  type="checkbox"
                  id="fun"
                  name="fun"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddFun();
                    }
                    else {
                      handleRemoveFun();
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="historic">Monuments historiques : </label>
                <input
                  type="checkbox"
                  id="historic"
                  name="historic"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    if (checkboxValue === true) {
                      handleAddHistoric();
                    }
                    else {
                      handleRemoveHistoric();
                    }
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
  handleAddFood: PropTypes.func.isRequired,
  handleAddArt: PropTypes.func.isRequired,
  handleAddPub: PropTypes.func.isRequired,
  handleAddExcursion: PropTypes.func.isRequired,
  handleAddShop: PropTypes.func.isRequired,
  handleAddAcquatic: PropTypes.func.isRequired,
  handleAddFun: PropTypes.func.isRequired,
  handleAddHistoric: PropTypes.func.isRequired,
  handleRemoveFood: PropTypes.func.isRequired,
  handleRemoveArt: PropTypes.func.isRequired,
  handleRemovePub: PropTypes.func.isRequired,
  handleRemoveExcursion: PropTypes.func.isRequired,
  handleRemoveShop: PropTypes.func.isRequired,
  handleRemoveAcquatic: PropTypes.func.isRequired,
  handleRemoveFun: PropTypes.func.isRequired,
  handleRemoveHistoric: PropTypes.func.isRequired,
};

export default FiltersBar;
