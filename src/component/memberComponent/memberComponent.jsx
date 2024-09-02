import React from "react";
// import { RobotImg } from "../../constant";

import "./memberComponent.css"

const MemberComponent = ({memberName, memberMajor,memberImg}) => (
    <div className="member__component">
        <div className="memberContainer-img">
            <img src={memberImg}alt="member img" />
        </div>

        <div className="memberContainer-description">
            <p className="memberContainer-name p__fira">{memberName}</p>
            <p className="memberContainer-major p__fira">{memberMajor}</p>
        </div>
    </div>
)

export default MemberComponent;