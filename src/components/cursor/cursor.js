
import {
    gsap,

} from "gsap";
import React, {Component} from 'react'

class Cursor extends Component {
     constructor(props) {
         super(props);

         this.mouseIsHover = false;

         this.cursor = React.createRef();
         this.follower = React.createRef();

         this.cursorHoverElems = "a, button, .clickable-area";
     }
    componentDidMount(){
 if (!isTouchDevice()) {
     // set the starting position of the cursor outside of the screen
     let circlePos = {
         x: 0,
         y: 0
     };
     let mousePos = {
         x: 0,
         y: 0
     };

     document.querySelector("html").classList.add("no-touch");

     gsap.to({}, 0.01, {
         repeat: -1,
         onRepeat: () => {
             circlePos.x += (mousePos.x - circlePos.x) / 5;
             circlePos.y += (mousePos.y - circlePos.y) / 5;

             gsap.set(this.follower.current, {
                 x: circlePos.x,
                 y: circlePos.y
             });

             gsap.to(this.follower.current, 0.4, {
                 scale: this.mouseIsHover ? 1.9 : 1
             });

             gsap.set(this.cursor.current, {
                 x: mousePos.x,
                 y: mousePos.y
             });
         }
     });

     // add listener to track the current mouse position
     document.addEventListener("mousemove", e => {
         mousePos.x = e.clientX;
         mousePos.y = e.clientY;
     });

     // add listener to track the current mouse hover
     document.addEventListener("mousemove", e => {
         if (e.target.closest(this.cursorHoverElems)) {
             this.mouseIsHover = true;
         } else {
             this.mouseIsHover = false;
         }
     });
 }


    }
   render(){
       console.log("Cursor render")
       console.log(this.cursorHoverElems)
       return(
            <div className="cursor">
        <div className="cursor__dot" ref={this.cursor} />
        <div className="cursor__circle" ref={this.follower} />
      </div>


       );
   }
}

export default Cursor;

function isTouchDevice() {
    const prefixes = " -webkit- -moz- -o- -ms- ".split(" ");
    const mq = function (query) {
        return window.matchMedia(query).matches;
    };

    if ("ontouchstart" in window || window.DocumentTouch) {
        return true;
    }

    // include the 'heartz' as a way to have a non matching MQ to help terminate the join
    // https://git.io/vznFH
    const query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join(
        ""
    );
    return mq(query);
}
