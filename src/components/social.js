import React from 'react'
import LinkedInIcon from '../assets/linkedin-icon.svg'
const Social = () => {
    return(
        <div className="social__container">
              <a className="social-icon linkedin" href="https://www.linkedin.com/in/maralsabbagh/" title="Restons connectés"><img  src={LinkedInIcon} alt="LinkedIn" /></a>
        </div>
    )
}
export default Social;