import React from 'react';

// Styles
import './styles.scss';

// semantic-ui
import { Button } from 'semantic-ui-react';

import SearchBar from '../SearchBar';

const FiltersBar = () => (
  <div className="filtersbar">
    <SearchBar />
    <div className="availability">
      <div className="availability-dates">
        <p>Selectionner vos dates</p>
        <button>
          Start Day
        </button>
        <button>
          End Day
        </button>
      </div>
      <div className="availability-time">
        <p>Je suis dispo</p>
        <Button active>
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
      <span>Mes préférences</span>
    </div>
  </div>
);

export default FiltersBar;
