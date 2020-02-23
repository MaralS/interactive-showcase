import React from 'react';
import './scss/main.scss';
import HomeSection from './components/home-section'
import Cursor from './components/cursor'
import LinkedInIcon from './linkedin-icon.svg'
import MenuIcon from './components/menu-icon'

function App() {
  return (
    <div className="showcase__container">
      <MenuIcon />
      <HomeSection />
      <Cursor />
      <a className="social-icon linkedin" href="https://www.linkedin.com/in/maralsabbagh/" title="Restons connectés"><img  src={LinkedInIcon} alt="LinkedIn" /></a>


    </div>
  );
}

export default App;
