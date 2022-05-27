import React from "react";
import Contact from "./Contact";
import { AiOutlineGithub } from "react-icons/ai";
import { SiNetlify } from "react-icons/si";
import img1 from "../images/Stranger's Things.png"

const Profile = () => {
    return (
        <div className="profile-container">
            <h3 className="profile-name">Rubal Kaur</h3>
            <div className="profile-list">
                Technologies:
                <ul className="tech-list">
                    <li><b>Frontend: </b>HTML, CSS, JavaScript, React, Material-UI</li>
                    <li><b>Backend: </b> Node.js & Express, APIs, SQL, PostgreSQL</li>
                </ul>
            </div>
            <div className="profile-projects">
                <h3>Projects:</h3>
                <div className="projects">
                    <div className="project1-strangers-things">
                        <div className="project1-details">
                            <p className="project1-title">Stranger's Things</p>
                            <p>Stranger's Things is a space for users to buy and sell new or used products from and to other users. The users can message other users about the price of their product or to know more details before their purchase.</p>
                            <p>It is a project creating register, login/logout, messaging, and posting abilities utilizing JWT, and API requests.</p>
                            <p><b>Technologies Used: </b>HTML, CSS, JavaScript, React</p>
                            <div className="project1-link-logo">
                                <a className="project1-links" href="https://github.com/rubalkaur1903/myPortforlio" target="_blank"><AiOutlineGithub /> GitHub</a>
                                <a className="project1-links" href="https://polite-cucurucho-ad10e5.netlify.app/" target="_blank"><SiNetlify /> Live Link</a>
                            </div>
                        </div>
                        <div className="project1-image">
                            <img className="project1-image" src={img1} alt="image of shopping online" height="400px" width="500px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <Contact />
            </div>
        </div>
    )
}

export default Profile;