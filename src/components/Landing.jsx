
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin( ScrollTrigger )

const Landing = () => {

    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#projects',
            }
        })

    })

    return (
        <section id="landing">
            <div className="row center">
                <h1 className="landing__title">Drew Allred</h1>
            </div>
        </section>
    )
}

export default Landing
