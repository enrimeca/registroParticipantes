import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/jquery/dist/jquery.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

const container = document.getElementById('app')
 
ReactDOM.render(  <App />,  container );