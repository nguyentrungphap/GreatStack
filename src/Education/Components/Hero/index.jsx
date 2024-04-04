import React from "react";
import Style from "./style.module.scss";
import Icon from "../../assets/dark-arrow.png";

function Hero() {
  return (
    <div className={Style.wrapper}>
      <div className={Style.container}>
        <div className={Style.heroContent}>
          <h2> We Ensure better education for a better world</h2>
          <p>
            Our cutting-edge curriculum is designed to empower students with the
            knowledge, skills, and experiences needed to excel in the dynamic
            field of education
          </p>
          <button>
            Explore more <img src={Icon} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
