import React /*, {useEffect}*/ from 'react';
/*
import {TimelineMax, Power2} from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'*/

const About = ({dimensions}) => {
    return(
        <div className="about__outer">
            <div className="about__inner">
                  <div className="content__text">
                <h1>Expérimenter, apprendre et transmettre</h1>
                <p>Une aventure qui commence 2007 avec l'apprentissage en autodidacte  de Photoshop.  Un temps propice aux expérimentations ou la seule limite reste  l'imagination. En 2010, mon premier tutoriel imprimé sur papier glacé. Transmettre devient alors aussi important que d'apprendre par moi-même.</p>

                <h2>Curiosité gisement de créativité</h2>
                <p>Explorer des terrains inconnus pour sortir de sa zone de confort. Alors pourquoi se limiter qu'à un seul domaine pour exprimer sa créativité ?  Grâce à cela j'ai développé des compétences en création audiovisuelle.</p>
                <h2>Parutions</h2>
                <ul>
                    <li>Création Photo Hors-Série 5, « Une mise en scène pétillante » – Savoir tout faire avec Photoshop, Tutoriels - Volume I (Livre), 2010, Oracom Editions</li>
                    <li>Création Photo N°5, « Un amour de glamour », 2010  Oracom Editions</li>
                    <li>« Retouchez facilement vos photos », Step by Step, Cahier retouche photo (Livre), 2011, Oracom Editions</li>
                    <li>« Créer une composition futuriste bichromatique », Savoir tout faire avec Photoshop, Tutoriels — Volume XVI, juil. 2013, Oracom Editions</li>
                    <li>«Sacraliser un portrait», Savoir tout faire avec Photoshop, Tutoriels — Volume XVI, juil. 2013, Oracom Editions</li>
                </ul>

            </div>
            <div className="content__images">
            </div>


            </div>



        </div>
    )
}
export default About;