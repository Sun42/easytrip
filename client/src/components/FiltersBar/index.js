/* eslint-disable padded-blocks */
import React from 'react';
import PropTypes from 'prop-types';

// styles
import './styles.scss';

// semantic-ui
import { Button } from 'semantic-ui-react';

// import des autres composants
import SearchBar from '../../containers/SearchBar';

const FiltersBar = ({
  handleAvail, handlePrefGastronomie,
  handlePrefCulture, handlePrefBar, handlePrefPromenade,
  handlePrefShopping, handlePrefActAqua, handlePrefSpectacle,
}) => (
  <div className="filtersbar">

    <SearchBar />

    <div className="availability">
      <div className="availability-dates">
        <p>Selectionner vos dates</p>
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
                  handlePrefGastronomie();
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

FiltersBar.propTypes = {
  handleAvail: PropTypes.func.isRequired,
  handlePrefGastronomie: PropTypes.func.isRequired,
  handlePrefCulture: PropTypes.func.isRequired,
  handlePrefBar: PropTypes.func.isRequired,
  handlePrefPromenade: PropTypes.func.isRequired,
  handlePrefShopping: PropTypes.func.isRequired,
  handlePrefActAqua: PropTypes.func.isRequired,
  handlePrefSpectacle: PropTypes.func.isRequired,
};

export default FiltersBar;
