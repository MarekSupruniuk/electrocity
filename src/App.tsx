import { Global } from '@emotion/react';

import { globalStyles } from 'styles';
import { Home } from 'pages/Home/Home';

const App = () => (
  <>
    <Global styles={globalStyles} />
    <Home />
  </>
);

export default App;
