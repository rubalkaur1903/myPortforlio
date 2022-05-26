import React from "react";

import Contact from './Contact'

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro">
                <div className="intro-left">
                    <p className="intro-left-name">Rubal Kaur</p>
                    <p className="intro-left-title">Web Developer</p>
                </div>
                <div className="intro-right">
                    <p>Portfolio</p>
                </div>
            </div>
            <div className="summary">
                <h3 className="about-heading">About</h3>
                <p>A woman, an immigrant, a dreamer, and a passionate Web Developer with a non-traditional background seeking new opportunities.</p>
                <p>I am a self-taught coder and a 26 week Fullstack immersive Bootcamp graduate from Fullstack Academy. I love fixing bugs and developing applications using my favorite technologies. When I am not coding, I like to hit the beach and spend some quality time with my family and friends.</p>
            </div>
            <div className="footer-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Intro;