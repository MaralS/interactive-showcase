
/*
import {TimelineMax, Power2} from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'*/
import IntroOverlay from '../components/intro-overlay'
import HomeSection from '../components/home-section'
import React, { useEffect/*, useState*/ } from "react";

// import animations
import HomeAnim  from '../animations/animHome';



const Home = () => {



      useEffect(() => {


          HomeAnim()
      })
    return(
        <>
        <IntroOverlay />

        <HomeSection />
        </>
    )
}
export default Home;