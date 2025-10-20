import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';

import { ToDoListPage } from './pages/ToDoListPage.tsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <ToDoListPage />
  </React.StrictMode>
);
 