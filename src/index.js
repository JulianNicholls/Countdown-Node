import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { CountdownProvider } from './context';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(
  <React.StrictMode>
    <CountdownProvider>
      <App />
    </CountdownProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
