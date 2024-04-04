import React from "react";
import Style from "./style.module.scss";
import Logo from "../../assets/logo.png";
function Navbar() {
  return (
    <div className={Style.container}>
      <img className={Style.logo} src={Logo} alt="" />
      <ul className={Style.navbar}>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>campus</li>
        <li>Testimonials</li>
        <li>
          <button>Contact us</button>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
