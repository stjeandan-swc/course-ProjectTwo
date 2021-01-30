import React from 'react';

// import pages
import AboutUs from './pages/AboutUs';

// Components
import Nav from './components/Nav';

// import styles
import GlobalStyle from './components/GlobalStyle';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </div>
  );
}

export default App;
