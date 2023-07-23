import "./intro.scss";
import photo from "../../../public/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="left-wrapper">
          <h2 className="intro-hello">Hello, I am </h2>
          <h1 className="intro-name">Dip Kor Imon</h1>
          <div className="intro-title">
            <div className="title-wrapper">
              <div className="title-item">Competitive Programmer</div>
            </div>
          </div>
          <p className="intro-desc">
            I’ve always been a great problem solver, an independent introvert,
            and a technophile obsessed with the latest devices. I started
            learning to code a few years ago, though it was always more of a
            hobby than a career focus. I am skilled in Data Structures and
            Algorithms and also various programming languages.
          </p>
          <div className="icon">
            <a href="https://www.linkedin.com/in/dipkorimon/">
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/dipkorimon/">
              <FacebookIcon />
            </a>
            <a href="https://github.com/dipkorimon">
              <GitHubIcon />
            </a>
            <a href="/contact">
              <EmailIcon />
            </a>
          </div>
          <button>Download CV</button>
        </div>
      </div>
      <div className="intro-right">
        <img src={photo} alt="" />
      </div>
    </div>
  );
};

export default Intro;
