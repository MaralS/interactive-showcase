
import {
    TimelineMax,

} from "gsap";
import React, {Component} from 'react'


class HomeSection extends Component {
    constructor(props){
        super(props);
        this.tl = null;
        this.titleLetter = null;
    }
    componentDidMount() {
        this.tl = new TimelineMax();
        this.tl.fromTo(this.titleLetter, {
            transform: 'matrix(1,0,0,1,-50,0)',
            opacity: 0
        }, {

            duration: .75,
            transform: 'matrix(1,0,0,1,0,0)',
            opacity: 1
        })


    }
    render(){

        return(

                <section className = "section">
                    <div className="section__figure">
                        <div className="section__figure__inner" ref={div => this.figTitleContainer = div}>
                            <h1 className="section__figure__title" ref={h1 => this.titleLetter = h1}>
                                <span>c</span>
                                <span>r</span>
                                <span>e</span>
                                <span>a</span>
                                <span>t</span>
                                <span>i</span>
                                <span>v</span>
                                <span>i</span>
                                <span>t</span>
                                <span>y</span>
                            </h1>
                        </div>
                        <figure className="section__figure__img">
                            <img src={
                                `https://images.unsplash.com/photo-1505085702750-96d89f461398?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80`
                            }
                            alt = "by Joel Filipe" />
                        </figure>

                    </div>

                    <div className="section__content">
                        <div className="section__content__inner">
                            <h2 className="section__content__title">Is humanity</h2>
                            <p className="section__content__summary">The most powerful resource and for me a need to be fufilled.</p>
                            <p><a href="http://maralsabbagh.fr" title="Site web actuel">Lien vers une page externe</a></p>
                            </div>



                    </div>
                </section>


        );
    }
}
export default HomeSection;