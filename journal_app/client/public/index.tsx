import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import GraphData from './services/GraphData';
import GraphContainer from './components/GraphContainer';
import SqlClientInterface from './components/SqlClientInterface';

ReactDOM.render(

  <React.StrictMode>
    <GraphContainer />
    <SqlClientInterface />
  </React.StrictMode>

, document.getElementById('root')
);
