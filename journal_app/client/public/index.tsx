import React from 'react';
import ReactDOM from 'react-dom';
import DefaultGraphView from './components/GraphJournal';
import SqlClientInterface from './components/SqlClientInterface';
import './index.scss';

ReactDOM.render(

  <React.StrictMode>
    <DefaultGraphView />
    <SqlClientInterface />
  </React.StrictMode>

, document.getElementById('root')
);
