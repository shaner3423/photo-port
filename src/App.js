import React from 'react';
import About from './components/About';
import Nav from './components/Nav';

//can work with const Pet = () => {} instead of functionApp()
function App() {
  return (
    <div >
      <main>
        <Nav></Nav>
        <About></About>
      </main>
    </div>
  );
}

export default App;
