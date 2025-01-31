// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Router';
import './index.css';
import './App.css'; // Ensure this line is included

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
