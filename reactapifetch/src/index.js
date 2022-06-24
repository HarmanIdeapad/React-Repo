import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Card';
import EventBind from './components/EventBind';
import ApiFetch from './components/ApiFetch';
import Parent from './components/Parent';
import TableData from './components/TableData';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    {/* <Card/> */}
    <TableData />
    {/* <EventBind/> */}
    {/* <ApiFetch/> */}
    {/* <Parent/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
