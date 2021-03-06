import React from 'react';
import PropTypes from 'prop-types';

const WIDE_CHANGEOVER = 21;

const WordBox = ({ words }) => {
  const count = words.length;
  const length = words[0].length;

  return (
    <div className={count < WIDE_CHANGEOVER ? 'word-box' : 'word-box wide'}>
      <div className="header" id={`header-${length}`}>
        {length}-letter words <span>({count})</span>
      </div>
      <p>
        {words.map((word, index) => (
          <a
            key={word}
            href={`http://dictionary.reference.com/browse/${word}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {word.toUpperCase()}
            {index !== count - 1 && ', '}
          </a>
        ))}
      </p>
    </div>
  );
};

WordBox.propTypes = {
  words: PropTypes.array.isRequired,
};

export default WordBox;
