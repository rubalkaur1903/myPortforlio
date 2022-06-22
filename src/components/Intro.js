import React from "react";

import Contact from './Contact'
import img1 from '../images/IMG_4283 2.jpg'

const Intro = () => {
    return (
        <div className="intro-container">
            <div className="intro">
                <div>
                    <img className="intro-image" src={img1} width="380px" height="400px"></img>
                </div>
                <div className="intro-right">
                    <p className="intro-right-name">Rubal Kaur</p>
                    <p className="intro-right-title">Web Developer</p>
                </div>
            </div>
            <div className="summary">
                <h3 className="about-heading">About</h3>
                <div className="about-elements">
                    {/* <img className="intro-image" src={img1} width="400px" height="300px"></img> */}
                    <div className="about-p-elem">
                        <p>A passionate Web Developer with a non-traditional background seeking new opportunities.</p>
                        <p>I am a self-taught coder and a 26 week Fullstack immersive Bootcamp graduate from Fullstack Academy. I love fixing bugs and developing applications using my favorite technologies. When I am not coding, I like to hit the beach, catch up on my favorite shows, read, or spend quality time with my family and friends.</p>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Intro;