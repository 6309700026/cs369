import React from 'react';
import ReactDOM from 'react-dom/client';
import CounterHook from './AppCounter'
import App from './AppFilter';
import AppReact from './AppFilterReact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <CounterHook />
    <App /> */}
    <App />
  </React.StrictMode>
);

