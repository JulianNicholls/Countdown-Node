import React from 'react';

const Tabs = ({ panel, setPanel }) => {
  return (
    <div className="container tab-holder">
      <div
        className={'tab' + (panel === 'letters' ? ' active' : '')}
        data-section="letters"
        onClick={() => setPanel('letters')}
      >
        Letters
      </div>
      <div
        className={'tab' + (panel === 'numbers' ? ' active' : '')}
        data-section="numbers"
        onClick={() => setPanel('numbers')}
      >
        Numbers
      </div>
    </div>
  );
};

export default Tabs;
