import React, { useState } from 'react';

const NumbersResultBox = ({ result }) => {
  return (
    <div className="result-box">
      <div className="header">Method</div>
    </div>
  );
};

const NumbersPanel = () => {
  const [numbers, setNumbers] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState([]);

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
          placeholder="e.g. 1 7 3 4 8 25"
        />

        <label htmlFor="target">Target</label>
        <input
          type="number"
          id="target"
          value={target}
          onChange={handleTarget}
          autoComplete="off"
          autoCorrect="off"
        />
        <button type="submit" className="big-button" disabled={true}>
          Countdown
        </button>
      </form>

      <NumbersResultBox result={result} />
    </div>
  );
};

export default NumbersPanel;
