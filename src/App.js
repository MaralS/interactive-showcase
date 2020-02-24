import React, {useRef, useEffect} from 'react';
import './scss/main.scss';
import HomeSection from './components/home-section'
import Cursor from './components/cursor'
import LinkedInIcon from './linkedin-icon.svg'
import MenuIcon from './components/menu-icon'
import {TimelineMax, Power2} from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'
import Overlay from './components/overlay'

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
      /*.to(sectionReveal, 1.5, {
        height: '0%',
        ease: Power2.easeInOut
      }) //en attendant de faire un overlay dédié.*/
      .to(overlayLeft, 1.5, {
          height: '0%',
          ease: Power2.easeInOut
        })
        .to(overlayRight, 1.5, {
          height: '0%',
          ease: Power2.easeInOut,
          delay: -0.8
        })
      .to(imageReveal, 1.5, {
        width: '0%',
        ease: Power2.easeInOut
      }, "beginAnim")
      .to('.section__figure__img > img', 1.5, {
        scale: 1,
        ease: Power2.easeInOut
      }, "beginAnim")

      .addLabel("textFading", 2.5)
      .to('.section__figure__title__line-1', .4, {
        opacity: 1,
        transform: 'matrix(1,0,0,1,0,0)',
        ease: Power2.easeOut
      }, "textFading")
      .to('.section__figure__title__line-2', .4, {
        opacity: 1,
        transform: 'matrix(1,0,0,1,0,0)',
        ease: Power2.easeOut
      })
      .to('.section__figure__title__line-3', .4, {
        opacity: 1,
        transform: 'matrix(1,0,0,1,0,0)',
        ease: Power2.easeOut
      })
      .addLabel("contentText", 2)
      // animation du contenu text à partir de 2 sec
      .to('.section__content__title', .6, {
        opacity: 1,
        transform: 'matrix(1,0,0,1,0,0)',
        ease: Power2.easeInOut
      }, "contentText")
      .to('.section__content__summary', .6, {
        opacity: 1,
        transform: 'matrix(1,0,0,1,0,0)',
        ease: Power2.easeInOut
      }, "contentText")
      .to('.section__content__link', .6, {
        opacity: 1,
        transform: 'matrix(1,0,0,1,0,0)',
        ease: Power2.easeInOut
      }, "contentText");


  })

  return (

       <div className="showcase__container">

        <MenuIcon />
        <HomeSection />
        <Cursor />
        <a className="social-icon linkedin" href="https://www.linkedin.com/in/maralsabbagh/" title="Restons connectés"><img  src={LinkedInIcon} alt="LinkedIn" /></a>
        <Overlay/>
      </div>



  );
}

export default App;
