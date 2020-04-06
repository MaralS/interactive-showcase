import React /*, {useEffect}*/ from 'react';
/*
import {TimelineMax, Power2} from "gsap";
import CSSRulePlugin from 'gsap/CSSRulePlugin'*/

const About = ({dimensions}) => {
    return(
        <div className="about__outer">
            <div className="about__inner">
                  <div className="content__text">
                <h1>Vegan cook lover <sup>(1)</sup>, Beat Saber Ninja <sup>(2)</sup></h1>
                <p><sup>(1)</sup>Jamais sans mon hummus !<br/> <sup>(2)</sup>Cycle Hit en mode <strong>expert</strong> : 6 cubes / seconde.</p>


                <h2>De graphiste à webdesigner</h2>
                <p>Une aventure qui commence 2007 avec l'apprentissage en autodidacte  de Photoshop.  Un temps propice aux expérimentations ou la seule limite reste  l'imagination. En 2010, mon premier tutoriel dans la presse spécialisée. Transmettre devient alors aussi important qu'apprendre.</p>

                <h3>Parutions</h3>
                <ul>
                    <li><em> Une mise en scène pétillante</em> Création Photo Hors-Série 5 – Savoir tout faire avec Photoshop, Tutoriels - Volume I (Livre), 2010, Oracom Editions</li>
                    <li> <em> Un amour de glamour </em>,Création Photo N°5, 2010  Oracom Editions</li>
                    <li><em> Retouchez facilement vos photos step by Step</em> , Cahier retouche photo (Livre), 2011, Oracom Editions</li>
                    <li><em> Créer une composition futuriste bichromatique </em>, Savoir tout faire avec Photoshop, Tutoriels — Volume XVI, juil. 2013, Oracom Editions</li>
                    <li><em>Sacraliser un portrait</em>, Savoir tout faire avec Photoshop, Tutoriels — Volume XVI, juil. 2013, Oracom Editions</li>
                </ul>
                <h2>Du webdesign au dév. front-end</h2>
                <p>Curieuse, je me penche sur développement front-end. Elle me permet de prendre conscience des problématiques et d'adapter les solutions de design. Aujourd'hui, elle fait partie intégrande de ma démarche.</p>
                <h3>Réalisations</h3>
                <ul>
                    <li><a href="https://maraletdavid.fr/" title="Boutique Maral & David"> Boutique Maral et David</a>, codé avec ReactJS</li>
                    <li><a href="https://autocontrole-hexagones.fr/" title="Contrôle Technique à Montbéliard">Auto contrôle des Hexagones</a>, codé avec Gatsby JS (ReactJS)</li>
                    <li><a href="https://photoclub-colombierfontaine.com" title="Photoclub Colombier-Fontaine">Photoclub de  Colombier-Fontaine</a>, codé avec WordPress (Thème et plugin personnalisé)</li>
                </ul>

            </div>
            <div className="content__images">
            </div>


            </div>



        </div>
    )
}
export default About;