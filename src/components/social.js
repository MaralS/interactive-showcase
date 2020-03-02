import React from 'react'
import LinkedInIcon from '../assets/linkedin-icon.svg'
import DribbbbleIcon from '../assets/dribbble-icon.svg'
import GithubIcon from '../assets/github-icon.svg'
const Social = () => {
    return(
        <div className="social__container">
              <a className="social__icon" href="https://www.linkedin.com/in/maralsabbagh/" title="Restons connectés">
                  <img  src={LinkedInIcon} alt="LinkedIn" />
                </a>
              <a className="social__icon" href="https://github.com/MaralS" title="Codes réalisés">
                  <img  src={GithubIcon} alt="Github" />
              </a>
              <a className="social__icon" href="https://dribbble.com/MaralSabbagh" title="Restons connectés">
                  <img  src={DribbbbleIcon} alt="Portfolio Dribbble" />
              </a>
        </div>
    )
}
export default Social;