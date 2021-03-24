import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router'
import GraphData from './services/GraphData';

/*
  Note that services have a hierarchy, to avoid circular dependency,
  each service layer should not be aware of those below it, only above:
    ExternalAPI
    User
    GraphData

  TODO: consider using React.Context here to enforce the hierarchy of services - KW 2021-03
*/

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
  , document.getElementById('root')
);
