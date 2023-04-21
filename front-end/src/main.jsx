import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

import './style/tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <div className=' tw-flex tw-min-h-[100vh] tw-w-screen tw-bg-gradient-to-r tw-from-sky-100 tw-from-5% tw-via-blue-700 tw-to-sky-800 tw-to-5% tw-opacity-95'>
      <App />
    </div>
  </Router>,
);
