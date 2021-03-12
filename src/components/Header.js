import React from 'react';

const Header = () => (
  <header>
    <div className="header-container">
      <a href="https://reallybigshoe.co.uk/index.html">
        <img src="images/favicon-32x32.png" alt="Home" />
      </a>
      <a href="https://reallybigshoe.co.uk/index.html">Home</a>
      <a
        className="twitter"
        href="https://twitter.com/ReallyBigShoeUK"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
      <a
        className="github"
        href="https://github.com/JulianNicholls"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
    </div>
  </header>
);

export default Header;
