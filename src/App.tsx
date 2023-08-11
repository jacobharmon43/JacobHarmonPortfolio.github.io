import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom';

import PageBody from './components/PageBody/PageBody';

interface AppProps {}



const App: FC<AppProps> = () => (
  <BrowserRouter>
      <PageBody></PageBody>
  </BrowserRouter>
);

export default App;
