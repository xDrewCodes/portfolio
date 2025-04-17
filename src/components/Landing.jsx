import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Landing = () => {

    return (
        <section id="landing">
            <div className="landing__title--container">
                <h1 className="landing__title">Hey, I'm <span className="title__orange">Drew</span></h1>
                <h3 className="landing__subtitle">A <span className="title__green">Frontend</span> Web Developer</h3>
                <div className="landing__button">Checkout my projects</div>
            </div>
        </section>
    )
}

export default Landing
