import React, {Component} from 'react'
import {TimelineMax, Power4} from 'gsap'
import CSSRulePlugin from 'gsap/CSSRulePlugin'
const datas = [
     {
         label: 'projets',
         href: '/portfolio',
         title: 'Découvrir le portfolio'

     },
     {
         label: 'A propos',
         href: '/a-propos',
         title:'Mon parcours'

     },
     {
         label:'contact',
         href:'/contact',
         title:'Restons en contact !'
     }

]
const links = datas.map((data, i) =>(
    <li className={`link-`+i} key={i}><a href={data.href} title={data.title}>{data.label}</a></li>
))


class Menu extends Component {

    constructor(props){
        super(props)
        this.state = {
            visible: false
        }
        this.toggleMenu = this.toggleMenu.bind(this);
        this.menuReveal = null
        this.tl = null;
    }
    componentDidMount(){
        this.tl = new TimelineMax();


    }
   toggleMenu(){
       this.setState({visible: !this.state.visible})


       if(this.state.visible == true) {
           // CLOSE THE MENU
           this.tl.to(this.menuReveal, 1.2, {
               transform: 'translate(0,-100%)',

               ease: Power4.easeInOut
           })
       }else{
           // open the menu
            this.tl.to(this.menuReveal, 1.2, {
                transform: 'translate(0,0)',
                ease: Power4.easeInOut
            })

       }
   }

    render(){
        console.log('current state :' + this.state.visible)
        return(
            <div className="menu__container">
                <div className="menu__icon clickable" onClick={this.toggleMenu}>
                        <div className="dots">
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                </div>
                <ul className='menu__links' ref={ul => this.menuReveal = ul }>
                    {links}
                </ul>



            </div>




        )


    }
}
export default Menu;