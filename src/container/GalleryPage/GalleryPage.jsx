import React from "react";
import "./GalleryPage.css"
import { SharkGPT1,SharkGPT2, SharkGPT3, SharkGPT4 } from "../../constant";

const GalleryPage = () =>(
    <div className="club__galleryPage section__padding flex__center box__container" id="gallery">
        <div className="club__galleryPage-content">
            <h1 className="headtext__inter">ABOUT <span>SHARK GPT</span></h1>
            <p className="p__fira">Shark GPT is your personal AI assistant, designed by students to help you navigate CSULB effortlessly. Just ask questions and receive instant answers directly from the CSULB website—whether it's about courses, events, or campus resources. With Shark GPT, finding what you need at CSULB has never been simpler or more efficient.
            </p>
        </div>

        <div className="club__galleryPage-imgGrid">
            <img src={SharkGPT1} alt="sampleImg" />
            <img src={SharkGPT2} alt="sampleImg" />
            <img src={SharkGPT3} alt="sampleImg" />
            <img src={SharkGPT4} alt="sampleImg" />
        </div>

    </div>
);

export default GalleryPage;