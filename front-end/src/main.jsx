import React from 'react';
import ReactDOM from 'react-dom/client';
// import { icons } from 'react-icons';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './style/tailwind.css';
// This will ensure that the necessary CSS styles are loaded for all icons
// icons.loadFont();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
);
