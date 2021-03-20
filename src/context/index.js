import React, { useState, useContext, useEffect } from 'react';
import { serialisedResult as solveNumbers } from './cd-numbers';

import ClientWordList from '../ClientWordList';

const CountdownContext = React.createContext();

export const CountdownProvider = ({ children }) => {
  const [words, setWords] = useState([]);
  const [foundWords, setFoundWords] = useState([]);

  const initialLoad = () => {
    setWords(new ClientWordList());
  };

  useEffect(initialLoad, []);

  const getWords = (letters) => {
    setFoundWords(words.canBeMadeFrom(letters));
  };

  const state = {
    foundWords,
    getWords,
    solveNumbers,
  };

  return (
    <CountdownContext.Provider value={state}>{children}</CountdownContext.Provider>
  );
};

export const useCountdown = () => {
  const context = useContext(CountdownContext);

  if (context === undefined)
    throw new Error('useWords() must be used within a WordsProvider');

  return context;
};
