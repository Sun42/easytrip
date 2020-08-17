import React from 'react';

import FiltersBar from '../FiltersBar';
import Result from '../Result';

import './styles.scss';

const ResultPage = () => {
  return (
    <div className="resultpage">
      <FiltersBar />
      <Result />
    </div>
  );
};

export default ResultPage;
