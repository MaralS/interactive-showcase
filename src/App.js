import React, {useEffect} from 'react';
import gsap from "gsap";
import { Route } from "react-router-dom";
//components and SCSS
import './scss/main.scss';

import Cursor from './components/cursor'
import Social from './components/social'
// import Pages
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/contact", name: "Contact", Component: Contact },
  { path: "/portfolio", name: "Portfolio", Component: Portfolio },
  { path: "/about", name: "about", Component: About }
];
/*
function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
*/
function App() {

 /* const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth
  });*/

  useEffect(()=>{
    // prevents flashing
      gsap.to("body", 0, { css: { visibility: "visible" } });
     /* const debouncedHandleResize = debounce(function handleResize() {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth
        });
      }, 1000);

      window.addEventListener("resize", debouncedHandleResize);
      return () => {
        window.removeEventListener("resize", debouncedHandleResize);
      };*/

      // We listen to the resize event
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });

  })

  return (
       <div className="showcase__container">
        <Cursor />

               {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  <Component   />

                </Route>
              ))}
        <Social />
      </div>
  );
}

export default App;

