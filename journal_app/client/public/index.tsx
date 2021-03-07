import React from 'react';
import ReactDOM from 'react-dom';
import DefaultGraphView from './components/GraphJournal.tsx';
import GraphData from './services/GraphData'
import Socket from './services/Socket'

console.log("starting graph journal app")
let test = Socket

ReactDOM.render(<DefaultGraphView/>, document.getElementById('container'));
