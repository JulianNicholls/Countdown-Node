import React, { useState } from 'react';

import Header from './components/Header';
import Tabs from './components/Tabs';
import LetterForm from './components/LetterForm';
import WordView from './components/WordView';

const App = () => {
  const [panel, setPanel] = useState('letters');

  return (
    <div>
      <Header />
      <Tabs setPanel={setPanel} />
      {panel === 'letters' ? (
        <>
          <LetterForm />
          <WordView />
        </>
      ) : (
        <h1>Numbers!</h1>
      )}
    </div>
  );
};

export default App;
