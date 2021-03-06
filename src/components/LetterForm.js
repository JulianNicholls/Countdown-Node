import React, { useState } from 'react';

import { useWords } from '../context';

const LetterForm = () => {
  const [letters, setLetters] = useState('');
  const { getWords } = useWords();

  const findWords = (event) => {
    event.preventDefault();

    getWords(letters);

    return false;
  };

  const handleChange = (e) => {
    const entry = e.target.value;

    if (/^[A-Z]*$/i.test(entry)) {
      setLetters(entry);

      if (entry.length >= 7 && entry.length <= 15) getWords(entry);
    }
  };

  return (
    <div className="container">
      <form id="letters-form" onSubmit={findWords}>
        <input
          type="search"
          inputMode="search"
          id="letters"
          value={letters}
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          autoFocus
        />
        <button type="submit" className="big-button" disabled={letters.length < 7}>
          Countdown
        </button>
      </form>
    </div>
  );
};

export default LetterForm;
