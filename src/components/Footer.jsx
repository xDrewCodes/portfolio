
import React from 'react'
import LinkedInIcon from '../assets/icons/LinkedInFooter.png'
import CodepenIcon from '../assets/icons/CodepenFooter.png'
import DiscordIcon from '../assets/icons/DiscordFooter.png'
import GitHubIcon from '../assets/icons/GitHubFooter.png'

const Footer = () => {
    return (
        <footer>
            <div className="section__title">Drew Allred</div>
            <div className="footer__links">
                <div className="footer__link">Home</div>
                <div className="footer__link">Projects</div>
                <div className="footer__link">Contact</div>
                <div className="footer__link">Experience</div>
                <div className="footer__link">Resume</div>
            </div>
            <div className="footer__bottom">
                <div className="footer__socials">
                    <img src={LinkedInIcon} alt="LinkedIn" />
                    <img src={CodepenIcon} alt="Codepen" />
                    <img src={DiscordIcon} alt="Discord" style={{scale: 0.8}} />
                    <img src={GitHubIcon} alt="GitHub" />
                </div>
                <div className="footer__copyright">&copy;Copyright 2025 Drew Allred</div>
            </div>
        </footer>
    )
}

export default Footer
