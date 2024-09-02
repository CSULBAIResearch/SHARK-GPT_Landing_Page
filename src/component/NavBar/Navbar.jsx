

import React, {useState} from 'react';
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";


import "./Navbar.css"

const Navbar = () => {
    
    const [toggleMenu, setToggleMenu] = React.useState(false);

    
    return (
    <div className="club__navbar-container">

        <nav className="club__navbar">

            <p>AI Research Club CSULB</p>
            <ul className="club__navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#video">Video</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#mentor">Mentor</a></li>
            </ul>

            <div className="club__navbar-join">
                    <a href="#join">Subscribe</a>
            </div>

            <div className="club__navbar-smallscreen">
                <IoMenu color ="fff" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>

                {toggleMenu &&(
                    <div className="club__navbar-smallscreen_overlay flex__center slide-bot">
                        <BiMenuAltRight color ="fff" fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)}></BiMenuAltRight>
                        <ul className='club__navbar-smallscreen_links'>
                        <li><a href="#home">Home</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#video">Video</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#mentor">Mentor</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav> 
    </div>
);}

export default Navbar;