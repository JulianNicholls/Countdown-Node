import React from 'react';

const Tabs = ({ setPanel }) => {
  const setActivePanel = (e, name) => {
    console.log(e, name);
    e.target.classList.add('active');
    setPanel(name);
  };

  return (
    <div className="container tab-holder">
      <div
        className="tab active"
        data-section="letters"
        onClick={(e) => setActivePanel(e, 'letters')}
      >
        Letters
      </div>
      <div
        className="tab"
        data-section="numbers"
        onClick={(e) => setActivePanel(e, 'numbers')}
      >
        Numbers
      </div>
    </div>
  );
};

export default Tabs;
