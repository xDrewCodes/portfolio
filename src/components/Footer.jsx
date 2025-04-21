
import React from 'react'
import LinkedInIcon from '../assets/icons/LinkedInFooter.png'
import CodepenIcon from '../assets/icons/CodepenFooter.png'
import GitHubIcon from '../assets/icons/GitHubFooter.png'

const Footer = () => {
    return (
        <footer>
            <div className="section__title">Drew Allred</div>
            <div className="footer__links">
                <a href="#"><div className="footer__link">Home</div></a>
                <a href="#projects"><div className="footer__link">Projects</div></a>
                <a href="#contact"><div className="footer__link">Contact</div></a>
                <a href="#stack"><div className="footer__link">Experience</div></a>
                <a href="#"><div className="footer__link">Resume</div></a>
            </div>
            <div className="footer__bottom">
                <div className="footer__socials">
                    <a href="https://linkedin.com/in/drewallred" rel="noreferrer" target="_blank" ><img src={LinkedInIcon} alt="LinkedIn" /></a>
                    <a href="https://codepen.io/driw" rel="noreferrer" target="_blank" ><img src={CodepenIcon} alt="Codepen" /></a>
                    <a href="https://github.com/xdrewcodes" rel="noreferrer" target="_blank" ><img src={GitHubIcon} alt="GitHub" /></a>
                </div>
                <div className="footer__copyright">&copy;Copyright 2025 Drew Allred</div>
            </div>
        </footer>
    )
}

export default Footer
