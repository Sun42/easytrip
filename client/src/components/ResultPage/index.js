import React from 'react';

import FiltersBar from '../../containers/FiltersBar';
import Result from '../../containers/Result';

import './styles.scss';

const ResultPage = () => (
  <div className="resultpage">
    <FiltersBar />
    <Result />
  </div>
);

export default ResultPage;
