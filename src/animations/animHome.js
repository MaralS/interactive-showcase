import {TimelineMax, Power2} from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'

//Overlay
let overlayLeft = CSSRulePlugin.getRule('.overlay__left:after');
let overlayRight = CSSRulePlugin.getRule('.overlay__right:after');
// HomeSection
let imageReveal = CSSRulePlugin.getRule('.section__figure__img:after');


export const animOverlay = () => {
    var tl = new TimelineMax();
    tl.fromTo(overlayLeft, {height:'100%'}, {duration: 1.8,height:'0%', ease: Power2.easeInOut, delay:0.8 } )
    .fromTo(overlayRight, {height:'100%'}, {duration: 1.8,height:'0%', ease: Power2.easeInOut}, '-=1.6')
    .to('.overlay__container', 0, {display:'none'})

}
export const animSectionFigure = () => {
var tl = new TimelineMax();
    tl.to(imageReveal, 1.5, { height: '0%', ease: Power2.easeInOut })
      .to('.section__figure__img > img', 1.5, { scale: 1, ease: Power2.easeInOut }, '-=1.5')
      .to('.section__figure__title__line-1', .6, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeOut }, '-=0.4')
      .to('.section__figure__title__line-2', .6, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeOut }, '-=0.4')
      .to('.section__figure__title__line-3', .6, { opacity: 1, transform: 'matrix(1,0,0,1,0,0)', ease: Power2.easeOut }, '-=0.4')

}
export const animSectionContent = () => {
var tl = new TimelineMax();
    tl.to('.section__content__inner', .7, {
        opacity: 1,

         top: '50%',
        ease: Power2.easeInOut
    })
}

export const HomeAnim = () => {
    var master = new TimelineMax();
    master
          .add(animOverlay)
          .add(animSectionFigure, 1.2)
          .add(animSectionContent, 2.4)

}
export default HomeAnim;
