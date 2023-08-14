import { BrowserRouter } from 'react-router-dom';

import PageBody from './components/PageBody/PageBody';



const App = () => (
  <BrowserRouter>
    <div className='font-page text-monokaiYellow'>
      <PageBody></PageBody>
    </div>
  </BrowserRouter>
);

export default App;
