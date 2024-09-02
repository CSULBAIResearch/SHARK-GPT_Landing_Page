import React from "react";
import './MentorPage.css';
import {RobotImg} from "../../constant"
import { MemberComponent } from "../../component";
import { MentorImg } from "../../constant";

const MentorPage = () =>(
    <div className="club__mentorPage box__container seciton__padding" id = "mentor">
        <h1 className="p__fira-headline">MEET OUR <span>MENTOR</span></h1>
        <div className="club__mentorPage-content">
            <MemberComponent
                memberImg={MentorImg}
                // memberName={"Rahul Vishwakarma"}
            />
            <p className="club__mentorPage-description p__fira">
            
            <span>Rahul  Vishwakarma </span>(BCS Fellow) is an Entrepreneur in Residence (EIR) at Blue Ridge Labs @ Robin Hood. 
            He received M.S. degree in computer science at California State University Long Beach in 2024.
            </p>
        </div>
        
        
    </div>
);


export default MentorPage;