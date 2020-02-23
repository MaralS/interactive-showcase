
import {
    TimelineMax, Power2, CSSPlugin

} from "gsap";
import React, {Component} from 'react'
import Creativity from '../assets/creativity.jpg';

class HomeSection extends Component {
    constructor(props){
        super(props);
        this.tl = null;
        this.titleLine1 = null;
        this.titleLine2 = null;
        this.titleLine3 = null;

        this.figureContainer = null;
        this.figureImg = null;
        this.contentTitle = null;
        this.contentSummary = null;
        this.contentLink = null;
        this.imageReveal = null;
    }
    componentDidMount() {
        this.tl = new TimelineMax();

        this.tl
            .delay(1)
            .addLabel ("beginAnim",1)
            .fromTo(this.figureContainer, {
               transform:'matrix(1,0,0,1,-150,0)',
               //border:'1px solid blue'
               width:0
            }, {
                duration:1.5,
                transform: 'matrix(1,0,0,1,0,0)',
                width:'50%',
                ease: Power2.easeInOut
            }, "beginAnim")
           .fromTo(this.figureImg, {
               scale:1.6

            }, {

                duration:1.5,
                scale:1,
                ease: Power2.easeInOut
            }, "beginAnim")
            .addLabel("textFading",2.5)
            .fromTo(this.titleLine1, {
                transform: 'matrix(1,0,0,1,-50,0)',
                opacity: 0
            }, {
                duration: .4,
                transform: 'matrix(1,0,0,1,0,0)',
                opacity: 1,
                ease: Power2.easeOut
            }, "textFading")// Show titleLine1
            .fromTo(this.titleLine2, {
                transform: 'matrix(1,0,0,1,-50,0)',
                opacity: 0
            }, {
                duration: .4,
                transform: 'matrix(1,0,0,1,0,0)',
                opacity: 1,
                ease: Power2.easeOut
            }) //Show titleLine2
            .fromTo(this.titleLine3, {
                transform: 'matrix(1,0,0,1,-50,0)',
                opacity: 0,
                ease: Power2.easeOut
            }, {
                duration: .4,
                transform: 'matrix(1,0,0,1,0,0)',
                opacity: 1,
                ease: Power2.easeOut
            }) // Show titleLine3
            .addLabel("contentText", 2)
            // ajout d'un marqueur à 2sec comme repère pour l'animation du texte.
            .fromTo(this.contentTitle, {
                transform: 'matrix(1,0,0,1,-50,0)',
                opacity: 0
            }, {
                duration: .6,
                transform: 'matrix(1,0,0,1,0,0)',
                ease: Power2.easeInOut,
                opacity: 1
            }, "contentText") // Show contentTitle
            .fromTo(this.contentSummary, {
                transform: 'matrix(1,0,0,1,-50,0)',
                opacity: 0
            }, {
                duration: .6,
                transform: 'matrix(1,0,0,1,0,0)',
                ease: Power2.easeInOut,
                opacity: 1
            }, "contentText") // Show contentSummary
             .fromTo(this.contentLink, {
                 transform: 'matrix(1,0,0,1,-50,0)',
                 opacity: 0
             }, {
                 duration: .6,
                 transform: 'matrix(1,0,0,1,0,0)',
                 ease: Power2.easeInOut,
                 opacity: 1
             }, "contentText") // Show contentLink

    }
    render(){

        return(

                <section className = "section">
                    <div className="section__figure">
                        <div className="section__figure__inner">
                            <h1 className="section__figure__title">
                                <div className="section__figure__title__line-1" ref={div => this.titleLine1 = div}>
                                    <span>d</span>
                                    <span>e</span>
                                    <span>s</span>

                                </div>
                                <div className="section__figure__title__line-2" ref={div => this.titleLine2 = div}>
                                    <span>i</span>
                                    <span>g</span>
                                    <span>n</span>
                                </div>
                                <div className="section__figure__title__line-3" ref={div => this.titleLine3 = div}>
                                    <span>e</span>
                                    <span>r</span>

                                </div>

                            </h1>
                        </div>
                        <figure className="section__figure__img" ref={figure => this.figureContainer = figure}>


                                <img src={Creativity} alt = "Unsplash"  ref={img => this.figureImg = img}/>


                        </figure>

                    </div>

                    <div className="section__content">
                        <div className="section__content__inner">
                            <h2 className="section__content__title" ref={h2 => this.contentTitle = h2}>passionnée</h2>
                            <p className="section__content__summary" ref={p => this.contentSummary = p}>Créative et aux multiples ressources, recherche un job dans une <strong>agence</strong> de communication <em>créative</em>.</p>
                            <p className="section__content__link" ref={p => this.contentLink = p}><a className="intro-link" href="http://maralsabbagh.fr" title="Site web actuel">Portfolio</a></p>
                            </div>
                    </div>
                </section>

        );
    }
}
export default HomeSection;