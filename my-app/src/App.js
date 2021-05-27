import React from 'react';

import Page from './page/page';
import {ContextProvider} from './context/context';

function App() {
  return (
    <ContextProvider>
      <Page />
    </ContextProvider>
  );
}

export default App;
