
import React from 'react'
import JSIcon from '../assets/icons/JS.svg'
import CSSIcon from '../assets/icons/CSS.svg'
import HTMLIcon from '../assets/icons/HTML.svg'
import ReactIcon from '../assets/icons/ReactJS.svg'
import GitHubIcon from '../assets/icons/GitHub.svg'
import FirebaseIcon from '../assets/icons/Firebase.svg'
import VSCodeIcon from '../assets/icons/VSCode.svg'
import PythonIcon from '../assets/icons/Python.svg'
import FigmaIcon  from '../assets/icons/Figma.svg'
import CSIcon from '../assets/icons/CS.svg'
import VercelIcon from '../assets/icons/Vercel.svg'
import VSIcon from '../assets/icons/VS.svg'
import NextJSIcon from '../assets/icons/NextJS.svg'
import ReduxIcon from '../assets/icons/Redux.svg'


const Stack = () => {
    return (
        <section id="stack">
            <div className="section__title">My <span className="title__orange">Stack.</span></div>
            <div className="stack__container">
                <div className="stack__item">
                    <img src={JSIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={CSSIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={HTMLIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={ReactIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={GitHubIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={FirebaseIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={VSCodeIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={PythonIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={FigmaIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={CSIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={VercelIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={VSIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={NextJSIcon} alt="JS" />
                </div>
                <div className="stack__item">
                    <img src={ReduxIcon} alt="JS" />
                </div>
            </div>
        </section>
    )
}

export default Stack
