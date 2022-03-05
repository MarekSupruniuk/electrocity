import { Global } from '@emotion/react';

import logo from './common/svgs/logo.svg';

import { globalStyles } from './styles';

import { Home } from './pages/Home/Home';

function App() {
  return (
    <>
      <Global styles={globalStyles} />
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <Home />
        </header>
      </div>
    </>
  );
}

export default App;
