import React from "react";
import "./GalleryPage.css"
import { SharkGPT1,SharkGPT2, SharkGPT3, SharkGPT4 } from "../../constant";

const GalleryPage = () =>(
    <div className="club__galleryPage section__padding flex__center box__container" id="gallery">
        <div className="club__galleryPage-content">
            <h1 className="headtext__inter">ABOUT <span>SHARK GPT</span></h1>
            <p className="p__fira">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
                galley of type and scrambled it to make a type specimen book.
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