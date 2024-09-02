import React from "react";
import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import { useState } from 'react';
import {LandingVideo} from "../../constant"

import "./VideoPage.css"

const VideoPage = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = React.useRef();

    const handleVideo = () =>{
        setPlayVideo((prevPlayVideo) => !prevPlayVideo)

        if(playVideo){
            vidRef.current.pause();
        }
        else{
            vidRef.current.play();
        }
    }
    
    return (
    
    <div className="club__video box__container section__padding flex__center" id="video">
        <video
            src={LandingVideo}
            ref={vidRef}
            type="video/mp4"
            Loop
            controls={false}
        ></video>
        
        
        

        <div className="club__video-overlay flex__center">
            <div className="club__video-overlay_circle flex__center"
                onClick={handleVideo}>
                    {playVideo ? (<BsPauseFill color="#fff" fontSize={30} />)
                                : <BsFillPlayFill color="#fff" fontSize={30}/>}
                
            </div>
        </div>

    </div>
)}

export default VideoPage;