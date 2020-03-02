
//import {TimelineMax, Power2} from "gsap";
import React from 'react'
import Profil from '../assets/profil.jpg'

const HomeSection = () => {
    return(
         <section className = "section__container">
                    <div className="section__figure">
                            <div className="section__figure__title__outer">
                                <div className="section__figure__title__inner">
                                    <h2 className="section__figure__title fill">
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
                                </h2>
                                    <h2 className="section__figure__title nofill">
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
                            </h2>

                                </div>
                            </div>
                            <figure className="section__figure__img">
                                <img src={Profil} alt="Avatar"/>
                            </figure>
                        </div>


                    <div className="section__content">
                        <div className="section__content__inner">
                            <h2 className="section__content__title">passionnée</h2>
                            <p className="section__content__summary">A la recherche d'un job dans une <strong>agence</strong> de communication <em>créative</em>. </p>

                            <p className="section__content__link" ><a className="intro-link" href="https://www.linkedin.com/in/maralsabbagh/" title="LinkedIn">restons connectés</a></p>

                            </div>
                    </div>
                </section>

    );
};

export default HomeSection;