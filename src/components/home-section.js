
import {TimelineMax, Power2} from "gsap";
import React from 'react'
import Creativity from '../assets/creativity.jpg';


const HomeSection = () => {
    return(
         <section className = "section">
                    <div className="section__figure">
                        <div className="section__figure__inner">
                            <h1 className="section__figure__title">
                                <div className="section__figure__title__line-1">
                                    <span>d</span>
                                    <span>e</span>
                                    <span>s</span>
                                </div>
                                <div className="section__figure__title__line-2">
                                    <span>i</span>
                                    <span>g</span>
                                    <span>n</span>
                                </div>
                                <div className="section__figure__title__line-3">
                                    <span>e</span>
                                    <span>r</span>
                                </div>
                            </h1>
                        </div>
                        <figure className="section__figure__img">
                                <img src={Creativity} alt = "Unsplash"/>
                        </figure>
                    </div>

                    <div className="section__content">
                        <div className="section__content__inner">
                            <h2 className="section__content__title">passionnée</h2>
                            <p className="section__content__summary">Créative et aux multiples ressources, recherche un job dans une <strong>agence</strong> de communication <em>créative</em>.</p>
                            <p className="section__content__link" ><a className="intro-link" href="http://maralsabbagh.fr" title="Site web actuel">Portfolio</a></p>
                            </div>
                    </div>
                </section>

    );
};

export default HomeSection;