
import React from 'react'

const Nav = () => {

    return (
        <nav>
            <div className="nav__container">
                <div className="nav__logo">DA</div>
                <div>
                    <a href="#projects"><div className="nav__item">My Projects</div></a>
                    <a href="#contact"><div className="nav__item">Contact Me</div></a>
                    <a href="#stack"><div className="nav__item">My Experience</div></a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
