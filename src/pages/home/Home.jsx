import React from "react";
import Intro from "../../components/intro/Intro";
import Skill from "../../components/skill/Skill";
import Education from "../../components/education/Education";

const Home = () => {
  return (
    <div>
      <Intro />
      <Education />
      <Skill />
    </div>
  );
};

export default Home;
