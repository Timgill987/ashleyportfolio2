import React from 'react';
import AboutPage from './Components/about/about';
import DesignPage from './Components/design/design';
import DevelopmentPage from './Components/development/development'
import './Less/App.less';

function App() {
  return (
    <div className="App">
      <AboutPage />
      <DesignPage />
      <DevelopmentPage />
    </div>
  );
}

export default App;
