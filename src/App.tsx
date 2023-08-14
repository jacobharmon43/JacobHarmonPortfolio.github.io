import React, { FC } from 'react'
import { BrowserRouter } from 'react-router-dom';

import PageBody from './components/PageBody/PageBody';



const App = () => (
  <BrowserRouter basename='jacobharmon43.github.io'>
      <PageBody></PageBody>
  </BrowserRouter>
);

export default App;
