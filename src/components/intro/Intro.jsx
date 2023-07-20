import "./intro.scss";
import photo from "../../../public/logo.png";

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
