import React from "react";
import Contact from "./Contact";
import { AiOutlineGithub } from "react-icons/ai";
import { GrHeroku } from "react-icons/gr";
import { SiNetlify } from "react-icons/si"
import img1 from "../images/Stranger's Things.png"
import img2 from "../images/NamasteYogaSS.png"

const Profile = () => {
    return (
        <div className="profile-container">
            <h3 className="profile-name">Rubal Kaur</h3>
            <div className="profile-list">
                <h1 className="tech-heading">Technologies: </h1>
                <ul className="tech-list">
                    <li><b>Frontend: </b>HTML, CSS, JavaScript, React, Material-UI</li>
                    <li><b>Backend: </b> Node.js & Express, APIs, SQL, PostgreSQL</li>
                </ul>
            </div>
            <h3 className="projects-heading">Projects:</h3>
            <div className="project1">
                <div className="project1-img-div">
                    <img className="project1-img" src={img2} alt="Namaste Yoga Home" />
                </div>
                <div className="project1-p">
                    <h1 className="project1-title">Namaste Yoga Studio</h1>
                    <p>Namaste Yoga is a website for a Namaste Yoga Studio business(not real) that highlights the environment and culture of the studio. It also highlights the team members and the perks of working at the Studios. It gives an opportunity to submit an application to the job seekers.</p>
                    <p>It is a project creating home, about, team, and career pages.</p>
                    <p><b>Technologies Used: </b>HTML, CSS, JavaScript, React, Node.js, Express.js, SQL, PostgreSQL.</p>
                    <div className="project1-link-logo">
                        <a className="project1-links" href="https://github.com/rubalkaur1903/Namaste_Yoga_Studio" target="_blank"><AiOutlineGithub /> GitHub</a>
                        <a className="project1-links" href="https://floating-lowlands-88076.herokuapp.com/" target="_blank"><GrHeroku /> Live Link</a>
                    </div>
                </div>
            </div>
            <div className="project2">
                <div className="project2-img-div">
                    <img className="project2-img" src={img1} alt="image of shopping online" />
                </div>
                <div className="project2-p">
                    <h1 className="project2-title">Stranger's Things</h1>
                    <p>Stranger's Things is a space for users to buy and sell new or used products from and to other users. The users can message other users about the price of their product or to know more details before their purchase.</p>
                    <p>It is a project creating register, login/logout, messaging, and posting abilities utilizing JWT, and API requests.</p>
                    <p><b>Technologies Used: </b>HTML, CSS, JavaScript, React</p>
                    <div className="project2-link-logo">
                        <a className="project2-links" href="https://github.com/rubalkaur1903/UNIV_React_StrangersThingsProject" target="_blank"><AiOutlineGithub /> GitHub</a>
                        <a className="project2-links" href="https://polite-cucurucho-ad10e5.netlify.app/" target="_blank"><SiNetlify /> Live Link</a>
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