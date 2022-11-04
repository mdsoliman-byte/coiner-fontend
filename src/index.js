import React from 'react';
import ReactDOM from 'react-dom/client';
// import * as serviceWorkers from "../public/serviceWorkers";
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// serviceWorkers.register()
reportWebVitals();
