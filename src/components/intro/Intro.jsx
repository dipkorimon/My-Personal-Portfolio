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
            Greetings! I'm Dip Kor Imon, a dedicated programmer with a knack for
            turning lines of code into innovative solutions. I thrive in the
            realms of Competitive Programming and Web Application Development,
            leveraging them to architect robust and scalable solutions. I love
            sinking my teeth into complex challenges. My analytical mindset and
            knack for problem-solving enable me to dissect issues, identify root
            causes, and engineer elegant solutions that stand the test of
            scrutiny.
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
