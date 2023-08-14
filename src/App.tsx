import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom';

import PageBody from './components/PageBody/PageBody';



const App = () => (
  <BrowserRouter>
      <PageBody></PageBody>
  </BrowserRouter>
);

export default App;
