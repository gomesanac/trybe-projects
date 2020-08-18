import React from 'react';
import Home from './components/Home';
import StarWarsProvider from './context/StarWarsProvider';

function App() {
  return (
    <StarWarsProvider>
      <center>
        <Home />
      </center>
    </StarWarsProvider>
  );
}

export default App;
