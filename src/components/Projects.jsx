
import React from 'react'
import PrimeCover from '../assets/prime.png'
import SkinstricCover from '../assets/skinstric.png'
import SpotifyCover from '../assets/spotify.png'
import NftCover from '../assets/nft.png'
import TReactCover from '../assets/treact.png'

const Projects = () => {
    return (
        <section id="projects">
            <div className="section__title">
            <span className="corner-accent-start"></span>
            My <span className="title__orange">Projects.</span>
            <span className="corner-accent-end"></span></div>
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
                
            </div>
        </section>
    )
}

export default Projects
