import React, { useState, useContext, useEffect } from 'react';
import { serialisedResult as solveNumbers } from './cd-numbers';

import ClientWordList from '../ClientWordList';

const WordContext = React.createContext();

export const WordsProvider = ({ children }) => {
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

  return <WordContext.Provider value={state}>{children}</WordContext.Provider>;
};

export const useWords = () => {
  const context = useContext(WordContext);

  if (context === undefined)
    throw new Error('useWords() must be used within a WordsProvider');

  return context;
};
