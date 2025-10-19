import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ToDOList } from './pages/ToDoList';

  
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDOList />
  </React.StrictMode>
);
 
