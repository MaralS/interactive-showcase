import React, {Component} from 'react'
import {TimelineMax, Power2} from 'gsap'
const datas = [
     {
         label: 'projets',
         href: '/portfolio',
         title: 'Découvrir le portfolio'

     },
     {
         label: 'A propos',
         href: '/about',
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
       if(this.state.visible === true) {
           // CLOSE THE MENU
           this.tl.to(this.menuReveal, 1.5, {
               transform: 'translate(0,-100%)',
               display:'none',

               ease: Power2.easeOut
           })
       }else{
           // open the menu
            this.tl.to(this.menuReveal, 1.5, {
                transform: 'translate(0,0)',
                display:'flex',
                ease: Power2.easeOut
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