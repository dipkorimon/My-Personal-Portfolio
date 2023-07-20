import React from "react";
import "./navBar.scss";
import Logo from "../../../public/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src={Logo} alt="" /> Dip Kor Imon's Portfolio
          </a>
        </div>
        <div className="links">
          <a href="/">Home</a>
          <a href="">Education and Experience</a>
          <a href="">Competitive Programming</a>
          <a href="">Skills</a>
          <a href="">Projects</a>
          <a href="/contact">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
