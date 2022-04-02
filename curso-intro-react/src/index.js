import * as ReactDOMClient from 'react-dom/client';
import React from 'react';
//import './index.css';
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <App />
);
