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

function App() {
useEffect(() => {
  // prevents flashing
  gsap.to("body", 0, {
    css: {
      visibility: "visible"
    }
  });
  var showcaseContainer = document.getElementsByClassName('showcase__container')[0];

  window.addEventListener('load', () => {
    if (window.innerHeight <= 650) {
      console.log('Hauteur inférieure ou égale à 650px')

      showcaseContainer.classList.add('xsmall-vh')

    } else {
      console.log("Hauteur suffisamment grande. Pas besoin d'ajouter la classe xsmall-vh")

    }

  })

  var previousOrientation = window.orientation;
  var checkOrientation = function () {
    if (window.orientation !== previousOrientation) {
      previousOrientation = window.orientation;
      // orientation changed, do your magic here
      console.log('Changement orientation')


    }
  };

  window.addEventListener("resize", checkOrientation => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

     if (window.innerHeight > window.innerWidth) {
       console.log("Mode portrait");
       if (window.innerHeight < 650) {
         console.log("Add xsmall-vh class ")
         showcaseContainer.classList.add('xsmall-vh')
       } else {
         console.log("Delete sxmall-vh class")
         showcaseContainer.classList.remove('xsmall-vh')
       }

     } else {
       console.log("Mode paysage");
     }

  });
  window.addEventListener("orientationchange", checkOrientation, false);

  // (optional) Android doesn't always fire orientationChange on 180 degree turns
  setInterval(checkOrientation, 2000);



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

