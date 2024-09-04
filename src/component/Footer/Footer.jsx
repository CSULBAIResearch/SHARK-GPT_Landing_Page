import React from "react";

import { FaGithub, FaLinkedinIn, FaYoutubeSquare, FaInstagram   } from "react-icons/fa";

import "./Footer.css"

const Footer = () => (
    <div className="club__footer-container section__padding" id="team">
        <div className="club__footer-content">
            <div className="club__footer-name">
                <h1 className="headtext__inter">AI RESEARCH CLUB CSULB</h1>
            </div>

            <div className="club__footer-middle">
                <div className="main-website">
                    <a href="https://csulbairesearch.github.io/AI_Research_Website/" target="blank" rel="noopener noreferrer">
                    <button className="footer__btn-mainweb">Learn more about us at AI_Research Club</button>
                    </a>
                    
                </div>
            </div>

            <div className="club__footer-links">

                <a href="https://www.instagram.com/csulb_ai_research/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram color="#fff" fontSize={40} cursor={"pointer"}/>
                </a>


                <a href="https://github.com/CSULBAIResearch" target="_blank" rel="noopener noreferrer">
                    <FaGithub color="#fff" fontSize={40} cursor={"pointer"}/>
                </a>
                
                <a href="https://www.youtube.com/@AI-Researchcsulb" target="_blank" rel="noopener noreferrer">
                    <FaYoutubeSquare color="#fff" fontSize={40} cursor={"pointer"}/>
                </a>
                
                <a href="https://www.linkedin.com/company/csulb-arc/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn color="#fff" fontSize={40} cursor={"pointer"}/>
                </a>
               
            </div>
        </div>

        <div className="club__footer-licens flex__center p__fira">
            <p>© CSULB AI Research Club 2024 Designed and Developed by <a href="https://www.linkedin.com/in/my-lu/" cursor={"pointer"}><span>My Lu</span></a></p>
        </div>

        
    </div>
)

export default Footer  