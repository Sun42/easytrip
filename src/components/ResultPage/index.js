import React from 'react';

import FiltersBar from '../../containers/FiltersBar';
import Result from '../Result';

import './styles.scss';

const ResultPage = () => {

  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div className="resultpage">
      <FiltersBar
        midi={false}
        soir={false}
        ville={"Paris"}
      />
      <Result
        gastronomie={false}
        culture_art={false}
        bars={false}
        promenades={false}
        activites_aquatiques={false}
        shopping={false}
        spectacles_concerts={false}
      />
    </div>
  );
};

export default ResultPage;
