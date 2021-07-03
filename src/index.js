import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css'


import './compact.css';

import 'jquery/dist/jquery.js'
// import reportWebVitals from './reportWebVitals';

// i react-ga when time to go live
// import code block here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
