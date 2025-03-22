import React from 'react';
import ReactDOM from 'react-dom/client';  // <-- Important update here
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')); // <-- createRoot() here
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
