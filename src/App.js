import React, {useEffect} from 'react';
import {TimelineMax, Power2} from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import { Route, Router, Switch } from "react-router-dom";
//components and SCSS
import './scss/main.scss';

import Cursor from './components/cursor'

import Menu from './components/menu'
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
  //Overlay
  let overlayLeft = CSSRulePlugin.getRule('.overlay__left:after');
  let overlayRight = CSSRulePlugin.getRule('.overlay__right:after');
  // HomeSection
  let imageReveal = CSSRulePlugin.getRule('.section__figure__img:after');
  //let sectionReveal = CSSRulePlugin.getRule('.section:after');

  useEffect(()=>{
    // on load Timeline
    const tl = new TimelineMax();
    tl.delay(1)
      .addLabel("beginAnim", 1.2)
      .to(overlayLeft, 1.5, { height: '0%', ease: Power2.easeInOut })
      .to(overlayRight, 1.5, { height: '0%', ease: Power2.easeInOut })
      .to(imageReveal, 1.5, { width: '0%', ease: Power2.easeInOut }, "beginAnim")
      .to('.section__figure__img > img', 1.5, { scale: 1, ease: Power2.easeInOut }, "beginAnim")
      .addLabel("textFading", 2.5)
      .to('.section__figure__title__line-1', .4, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeOut },"textFading")
      .to('.section__figure__title__line-2', .4, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeOut })
      .to('.section__figure__title__line-3', .4, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeOut })
      .addLabel("contentText", 2)
      // animation du contenu text à partir de 2 sec
      .to('.section__content__title', .6, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeInOut}, "contentText")
      .to('.section__content__summary', .6, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeInOut}, "contentText")
      .to('.section__content__link', .6, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeInOut}, "contentText");
  })

  return (

       <div className="showcase__container">
        <Cursor />
        <Menu />
               {routes.map(({ path, Component }) => (
                <Route key={path} exact path={path}>
                  <Component  />
                </Route>
              ))}

        <Social />
      </div>



  );
}

export default App;
