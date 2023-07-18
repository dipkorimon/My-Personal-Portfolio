import React from "react";
import "./footer.scss";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="icon">
          <a href="">
            <LinkedInIcon />
          </a>
          <a href="">
            <FacebookIcon />
          </a>
          <a href="">
            <GitHubIcon />
          </a>
          <a href="">
            <EmailIcon />
          </a>
        </div>
        <div className="text">
          <p>
            Made with ❤️ by<span> Dip Kor Imon</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;