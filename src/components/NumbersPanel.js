import { useState } from 'react';

import { useCountdown } from '../context';

// Result looks like:
// [
//   [50, '-', 75, 25],
//   [ 1, '/', 50, 50 ],
//   [ 99, '-', 100, 1 ],
//   [ 10, '+', 7, 3 ],
//   [ 990, '*', 99, 10 ]
// ]

const NumbersResult = ({ result }) => {
  if (result.length === 0) return null;

  const lines = result.map((section) => {
    const [total, op, ...values] = section;

    return values.join(` ${op} `) + ` = ${total}\n`;
  });

  return <pre>{lines}</pre>;
};

const NumbersResultBox = ({ result }) => {
  return (
    <div className="result-box">
      <div className="header">Method</div>
      <div className="rb-main">
        <NumbersResult result={result} />
      </div>
    </div>
  );
};

const NumbersPanel = () => {
  const [numbers, setNumbers] = useState('');
  const [target, setTarget] = useState('');
  const [result, setResult] = useState([]);

  const { solveNumbers } = useCountdown();

  const handleChange = (e) => {
    const entry = e.target.value.trimStart();

    if ([...entry].every((char) => '0123456789,. '.includes(char))) {
      setNumbers(entry);
    }
  };

  const handleTarget = (e) => {
    const entry = e.target.value.trim();

    if (/^\d{0,3}$/.test(entry)) setTarget(entry);
  };

  const enableSolve = () => {
    const spaced = numbers.replace(/[,.]\s*/g, ' ');

    return (
      /^(\d{1,3}\s+){5}\d{1,3}$/.test(spaced.trim()) && /^\d{3}$/.test(target)
    );
  };

  const solve = (e) => {
    e.preventDefault();

    const spaced = numbers.replace(/[,.]\s*/g, ' ');
    const numArray = spaced.split(/\s+/).map((num) => parseInt(num, 10));
    const targetNum = parseInt(target, 10);

    setResult(solveNumbers(numArray, targetNum));
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
          title="Use spaces, commas, or dots to separate the numbers"
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

        <button
          id="solve-numbers"
          type="submit"
          className="big-button"
          onClick={solve}
          disabled={!enableSolve()}
        >
          Countdown
        </button>
      </form>

      <NumbersResultBox result={result} />
    </div>
  );
};

export default NumbersPanel;
