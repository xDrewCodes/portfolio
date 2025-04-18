
import React from 'react'

const Contact = () => {
    return (
        <section id="contact">
            <div className="section__title"><span className="title__orange">Contact</span> Me.</div>
            <div className="contact__form">
                <div className="contact__boxes">
                    <input type="text" placeholder="Name" className="contact__name" />
                    <input type="email" placeholder="Email" className="contact__email" />
                    <textarea type="text" placeholder="Message" className="contact__message" />
                </div>
                <div className="contact__submit">Send it over</div>
            </div>
        </section>
    )
}

export default Contact
