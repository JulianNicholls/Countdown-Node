import React from 'react';
import { render } from 'react-dom';

import { WordsProvider } from './context';

import Main from './components/Main';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

render(
  <WordsProvider>
    <Main />
  </WordsProvider>,
  document.getElementById('app')
);
