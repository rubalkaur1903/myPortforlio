import React from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="social-links">
                <p className="socials">Check out my socials:</p>
                <a className="link-github" href="https://github.com/rubalkaur1903" target="_blank" ><AiOutlineGithub /></a>
                <a className="link-linkedin" href="https://www.linkedin.com/in/rubalkaur/" target="_blank" ><AiFillLinkedin /></a>
            </div>
        </div>
    )
}

export default Contact;