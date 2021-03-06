import React, { useState } from 'react';

const LetterForm = () => {
  const [numbers, setNumbers] = useState('');
  const [target, setTarget] = useState('');

  const handleChange = (e) => {
    let entry = e.target.value;

    entry = entry.trimStart();

    if (/^(\d{1,3}\s*){0,6}$/.test(entry)) {
      setNumbers(entry);
    }
  };

  const handleTarget = (e) => {
    let entry = e.target.value;

    entry = entry.trim();

    if (/^\d{1,3}$/.test(entry)) setTarget(entry);
  };

  return (
    <div className="container">
      <form id="numbers-form">
        <label htmlFor="numbers">Numbers</label>
        <input
          type="search"
          inputMode="search"
          id="numbers"
          value={numbers}
          onChange={handleChange}
          autoComplete="off"
          autoCorrect="off"
          autoFocus
        />

        <label htmlFor="target">Target</label>
        <input
          type="number"
          id="target"
          value={target}
          onChange={handleTarget}
          autoComplete="off"
          autoCorrect="off"
          autoFocus
        />
        <button type="submit" className="big-button" disabled={true}>
          Countdown
        </button>
      </form>
    </div>
  );
};

export default LetterForm;
