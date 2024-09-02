import React from "react";
import {MemberData} from "../../constant";
import { MemberComponent } from "../../component";

import "./MemberPage.css"

const MemberPage = () =>(
    <div className="club__memberpage box__container section__padding flex__center" id="team">
        <h1 className="p__fira-headline">MEET OUR <span>TEAM</span></h1>

        <div className="club__member-container">
            {MemberData.map((memberData)=>(
                <MemberComponent
                    memberImg={memberData.memberImg}
                    memberName={memberData.name}
                    memberMajor={memberData.major}
                />
            ))}
        </div>


    </div>

)

console.log(MemberData)

export default MemberPage;