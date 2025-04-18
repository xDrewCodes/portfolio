
import React from 'react'
import PrimeCover from '../assets/prime.png'
import SkinstricCover from '../assets/skinstric.png'
import SpotifyCover from '../assets/spotify.png'
import NftCover from '../assets/nft.png'
import TReactCover from '../assets/treact.png'

const Projects = () => {
    return (
        <section id="projects">
            <div className="section__title">My <span className="title__orange">Projects.</span></div>
            <div className="projects__container">
                <div className="project">
                    <img src={PrimeCover} alt="Prime Video Clone" />
                </div>
                <div className="project">
                    <img src={SkinstricCover} alt="Skinstric Internship" />
                </div>
                <div className="project">
                    <img src={SpotifyCover} alt="Spotift Clone" />
                </div>
                <div className="project">
                    <img src={NftCover} alt="Frontend Simplified Internship" />
                </div>
                <div className="project">
                    <img src={TReactCover} alt="TReact Clone" />
                </div>
                <div className="project__link section__title">Check out my <span className="title__green">GitHub</span></div>
            </div>
        </section>
    )
}

export default Projects
