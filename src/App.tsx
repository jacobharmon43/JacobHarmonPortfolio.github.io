import { HashRouter } from 'react-router-dom';

import PageBody from './components/PageBody/PageBody';



const App = () => (
  <HashRouter>
    <div className='font-page text-monokaiYellow'>
      <PageBody></PageBody>
    </div>
  </HashRouter>
);

export default App;
