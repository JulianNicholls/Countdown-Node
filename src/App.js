import React, { useState } from 'react';

import Header from './components/Header';
import Tabs from './components/Tabs';
import LetterForm from './components/LetterForm';
import NumbersForm from './components/NumbersForm';
import WordView from './components/WordView';

const App = () => {
  const [panel, setPanel] = useState('letters');

  return (
    <div>
      <Header />
      <Tabs panel={panel} setPanel={setPanel} />
      {panel === 'letters' ? (
        <>
          <LetterForm />
          <WordView />
        </>
      ) : (
        <NumbersForm />
      )}
    </div>
  );
};

export default App;
