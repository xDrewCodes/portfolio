import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

const Landing = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight * 0.4

        // Set up floating circles
        const circles = []
        const numCircles = 30
        for (let i = 0; i < numCircles; i++) {
            const x = Math.random() * canvas.width
            const y = Math.random() * canvas.height
            const radius = Math.random() * 7 + 5
            const speed = Math.random() * 1 + 0.2
            const color = `rgb(173, 173, 173)`
            circles.push({ x, y, radius, speed, color })
        }

        // Draw floating circles
        function drawCircles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < numCircles; i++) {
                const { x, y, radius, speed, color } = circles[i]
                ctx.beginPath()
                ctx.arc(x, y, radius, 0, Math.PI * 2)
                ctx.fillStyle = color
                ctx.fill()
                circles[i].y -= speed
                if (y + radius < 0) {
                    circles[i].y = canvas.height + radius
                }
            }
            requestAnimationFrame(drawCircles)
        }

        drawCircles()

        // Handle window resize
        const handleResize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight * 0.4
        }
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                scrub: 1,
                trigger: '#projects',
            },
        })
    })

    return (
        <section id="landing">
            <div className="landing__title--container">
                <h1 className="landing__title">Drew Allred</h1>
                <h3 className="landing__subtitle">A Frontend Web Developer</h3>
                <canvas ref={canvasRef}></canvas>
            </div>
            <div className="landing__hero--container">

            </div>
        </section>
    )
}

export default Landing
