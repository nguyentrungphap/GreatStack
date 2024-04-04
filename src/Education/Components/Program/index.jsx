import React from "react";
import Style from "./style.module.scss";
import Program1 from "../../assets/program-1.png";
import Program2 from "../../assets/program-2.png";
import Program3 from "../../assets/program-3.png";
import ProgramIcon1 from "../../assets/program-icon-1.png";
import ProgramIcon2 from "../../assets/program-icon-2.png";
import ProgramIcon3 from "../../assets/program-icon-3.png";

function Program() {
  return (
    <div className={Style.programContainer}>
      <span>OUR PROGRAM</span>
      <h2>What We Offer</h2>
      <div className={Style.content}>
        <div className={Style.program}>
          <img src={Program1} alt="" />
          <div className={Style.hoverProgram}>
            <img src={ProgramIcon1} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className={Style.program}>
          <img src={Program2} alt="" />
          <div className={Style.hoverProgram}>
            <img src={ProgramIcon2} alt="" />
            <p>Masters Degree</p>
          </div>
        </div>
        <div className={Style.program}>
          <img src={Program3} alt="" />
          <div className={Style.hoverProgram}>
            <img src={ProgramIcon3} alt="" />
            <p>Post Graduation</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Program;
