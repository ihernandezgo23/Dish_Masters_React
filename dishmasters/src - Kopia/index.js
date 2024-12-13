import React from 'react';
import ReactDOM from 'react-dom/client';  // Asegúrate de usar 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './i18n'; // Asegúrate de importar i18n aquí

// Usa createRoot para React 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Si necesitas reportWebVitals, lo puedes dejar como antes
reportWebVitals();