import React from 'react';

import WordBox from './WordBox';
import { useWords } from '../context';

const WordView = () => {
  const { foundWords } = useWords();

  const boxes = words => {
    let currentLength = 0;
    let currentWords = [];
    let boxes = [];

    words.forEach(word => {
      if (word.length !== currentLength) {
        if (currentWords.length !== 0) {
          boxes.push(<WordBox key={currentLength} words={currentWords} />);
        }

        currentWords = [];
        currentLength = word.length;
      }

      currentWords.push(word);
    });

    return boxes.concat(<WordBox key={currentLength} words={currentWords} />);
  };

  if (foundWords.length === 0) return null;

  return <div className="wordview">{boxes(foundWords)}</div>;
};

export default WordView;
