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
  handleAddGastronomie, handleAddCulture, handleAddBar,
  handlePrefPromenade, handlePrefShopping, handlePrefActAqua,
  handlePrefSpectacle, handlePrefMonuments, allPoiOfDestination,
  handleRemoveGastronomie, handleRemoveCulture, handleRemoveBar,
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
                    const checkboxValue = evt.target.checked;
                    const gastronomie = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'restaurant') || (poi.tags.amenity === 'fast-food') || (poi.tags.amenity === 'food-court') || (poi.tags.amenity === 'cafe'));
                    if (checkboxValue === true) {
                      handleAddGastronomie(gastronomie);
                    }
                    else {
                      handleRemoveGastronomie(gastronomie);
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="culture_art">Culture / Art : </label>
                <input
                  type="checkbox"
                  id="culture_art"
                  name="culture_art"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    const art = allPoiOfDestination.filter((poi) => (poi.tags.tourism === 'artwork') || (poi.tags.amenity === 'arts_centre') || (poi.tags.tourism === 'gallery') || (poi.tags.tourism === 'museum'));
                    if (checkboxValue === true) {
                      handleAddCulture(art);
                    }
                    else {
                      handleRemoveCulture(art);
                    }
                  }}
                />
              </div>
              <div>
                <label htmlFor="bars">Bars : </label>
                <input
                  type="checkbox"
                  id="bars"
                  name="bars"
                  onClick={(evt) => {
                    const checkboxValue = evt.target.checked;
                    const bars = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'pub') || (poi.tags.amenity === 'bar') || (poi.tags.amenity === 'biergarten'));
                    if (checkboxValue === true) {
                      handleAddBar(bars);
                    }
                    else {
                      handleRemoveBar(bars);
                    }
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
                    const excursion = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'excursion'));
                    handlePrefPromenade(excursion);
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
                    const shop = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'shop'));
                    handlePrefShopping(shop);
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
                    const aquatic = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'aquatic'));
                    handlePrefActAqua(aquatic);
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
                    const fun = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'fun'));
                    handlePrefSpectacle(fun);
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
                    const historic = allPoiOfDestination.filter((poi) => (poi.tags.amenity === 'historic'));
                    handlePrefMonuments(historic);
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
  handleAddGastronomie: PropTypes.func.isRequired,
  handleAddCulture: PropTypes.func.isRequired,
  handleAddBar: PropTypes.func.isRequired,
  handlePrefPromenade: PropTypes.func.isRequired,
  handlePrefShopping: PropTypes.func.isRequired,
  handlePrefActAqua: PropTypes.func.isRequired,
  handlePrefSpectacle: PropTypes.func.isRequired,
  handlePrefMonuments: PropTypes.func.isRequired,
  allPoiOfDestination: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  handleRemoveGastronomie: PropTypes.func.isRequired,
  handleRemoveCulture: PropTypes.func.isRequired,
  handleRemoveBar: PropTypes.func.isRequired,
};

export default FiltersBar;
