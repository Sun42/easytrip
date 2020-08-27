/* eslint-disable padded-blocks */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Calendar
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

// styles
import './styles.scss';

// semantic-ui
import { Button } from 'semantic-ui-react';

// import des autres composants
import SearchBar from '../../containers/SearchBar';

const FiltersBar = ({
  handlePrefGastronomie, handlePrefCulture, handlePrefBar,
  handlePrefPromenade, handlePrefShopping, handlePrefActAqua,
  handlePrefSpectacle, handlePrefMonuments,
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
                <label htmlFor="gastronomie">Gastronomie : </label>
                <input
                  type="checkbox"
                  id="gastronomie"
                  name="gastronomie"
                  onClick={(evt) => {
                    const checkbox = evt.target;
                    console.log(evt.target);
                    handlePrefGastronomie(checkbox);
                  }}
                />
              </div>
              <div>
                <label htmlFor="culture_art">Culture / Art : </label>
                <input
                  type="checkbox"
                  id="culture_art"
                  name="culture_art"
                  onClick={() => {
                    handlePrefCulture();
                  }}
                />
              </div>
              <div>
                <label htmlFor="bars">Bars : </label>
                <input
                  type="checkbox"
                  id="bars"
                  name="bars"
                  onClick={() => {
                    handlePrefBar();
                  }}
                />
              </div>
              <div>
                <label htmlFor="promenades">Promenades / Randonnées : </label>
                <input
                  type="checkbox"
                  id="promenades"
                  name="promenades"
                  onClick={() => {
                    handlePrefPromenade();
                  }}
                />
              </div>
            </div>
            <div className="form-col2">
              <div>
                <label htmlFor="shopping">Shopping : </label>
                <input
                  type="checkbox"
                  id="shopping"
                  name="shopping"
                  onClick={() => {
                    handlePrefShopping();
                  }}
                />
              </div>
              <div>
                <label htmlFor="activites_acquatiques">Activités aquatiques : </label>
                <input
                  type="checkbox"
                  id="activites_acquatiques"
                  name="activites_acquatiques"
                  onClick={() => {
                    handlePrefActAqua();
                  }}
                />
              </div>
              <div>
                <label htmlFor="spectacles_concerts">Spectacles / Concerts : </label>
                <input
                  type="checkbox"
                  id="spectacles_concerts"
                  name="spectacles_concerts"
                  onClick={() => {
                    handlePrefSpectacle();
                  }}
                />
              </div>
              <div>
                <label htmlFor="monuments_historiques">Monuments historiques : </label>
                <input
                  type="checkbox"
                  id="monuments_historiques"
                  name="monuments_historiques"
                  onClick={() => {
                    handlePrefMonuments();
                  }}
                />
              </div>
            </div>
          </div>
          <div className="button-submit">
            <Button
              onClick={() => {
                console.log('click');
              }}
            >
              C'est parti !
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

FiltersBar.propTypes = {
  handlePrefGastronomie: PropTypes.func.isRequired,
  handlePrefCulture: PropTypes.func.isRequired,
  handlePrefBar: PropTypes.func.isRequired,
  handlePrefPromenade: PropTypes.func.isRequired,
  handlePrefShopping: PropTypes.func.isRequired,
  handlePrefActAqua: PropTypes.func.isRequired,
  handlePrefSpectacle: PropTypes.func.isRequired,
  handlePrefMonuments: PropTypes.func.isRequired,
};

export default FiltersBar;
