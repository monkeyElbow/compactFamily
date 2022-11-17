import React from 'react';
import {createRoot} from 'react-dom/client';

import App from './App';
import 'bootstrap/dist/js/bootstrap.js';
// import 'bootstrap/dist/css/bootstrap.css'


import './compact.css';

import 'jquery/dist/jquery.js'

const root = createRoot(document.getElementById('root'));
root.render(<App tab="home" />);

