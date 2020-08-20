import React from 'react';
import PropTypes from "prop-types";

// styles
import './styles.scss';

// semantic-ui
import { Button } from 'semantic-ui-react';

// import des autres composants
import SearchBar from '../SearchBar';

const FiltersBar = ({
  matin, midi, soir,
  gastronomie, culture_art, bars, promenades,
  activites_aquatiques, shopping, spectacles_concerts, handleAvail, 
  handlePref
}) => {

  return (
  <div className="filtersbar">

    <SearchBar />

    <div className="availability">
      <div className="availability-dates">
        <p>Selectionner vos dates</p>
        console.log
        <button type="button">
          Start Day
        </button>
        <button type="button">
          End Day
        </button>
      </div>
      <div className="availability-time">
        <p>Je suis dispo</p>
        <Button
          onClick={() => {
            handleAvail();
          }}
        >
          Matin
        </Button>
        <Button>
          Midi
        </Button>
        <Button>
          Soir
        </Button>
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
                onClick={() => {
                  handlePref();
                }}
              />
            </div>
            <div>
              <label htmlFor="culture_art">Culture / Art : </label>
              <input type="checkbox" id="culture_art" name="culture_art" />
            </div>
            <div>
              <label htmlFor="bars">Bars : </label>
              <input type="checkbox" id="bars" name="bars" />
            </div>
            <div>
              <label htmlFor="promenades">Promenades / Randonnées : </label>
              <input type="checkbox" id="promenades" name="promenades" />
            </div>
          </div>
          <div className="form-col2">
            <div>
              <label htmlFor="shopping">Shopping : </label>
              <input type="checkbox" id="shopping" name="shopping" />
            </div>
            <div>
              <label htmlFor="activites_acquatiques">Activités aquatiques : </label>
              <input type="checkbox" id="activites_acquatiques" name="activites_acquatiques" />
            </div>
            <div>
              <label htmlFor="spectacles_concerts">Spectacles / Concerts : </label>
              <input type="checkbox" id="spectacles_concerts" name="spectacles_concerts" />
            </div>
          </div>
        </div>
        <div className="button-submit">
        <Button>
            C'est parti !
        </Button>
        </div>
      </form>
    </div>
  </div>
)};

FiltersBar.propTypes = {
  handleAvail: PropTypes.func.isRequired,
};

export default FiltersBar;