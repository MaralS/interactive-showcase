import React from 'react';
import './scss/main.scss';
import HomeSection from './components/home-section/home-section'
import Cursor from './components/cursor/cursor'

function App() {
  return (
    <div className="showcase__container">
      <HomeSection />
      <Cursor />

    </div>
  );
}

export default App;
