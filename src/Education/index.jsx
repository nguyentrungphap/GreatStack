import React from "react";
import Navbar from "./Components/Navbar";
import Style from "./style.module.scss";
import Hero from "./Components/Hero";
import Program from "./Components/Program";
function Education() {
  return (
    <div className={Style.container}>
      <Navbar />
      <Hero />
      <Program />
    </div>
  );
}

export default Education;
