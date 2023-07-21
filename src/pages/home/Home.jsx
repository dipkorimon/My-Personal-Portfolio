import React from "react";
import Intro from "../../components/intro/Intro";
import SkillItem from "../../components/skill/SkillItem";
import EducationExperience from "../../components/education/EducationExperience";
import CompetitiveProgramming from "../../components/competitiveProgramming/CompetitiveProgramming";
import Project from "../../components/projects/Project";

const Home = () => {
  return (
    <div>
      <Intro />
      <EducationExperience />
      <CompetitiveProgramming />
      <SkillItem />
      <Project />
    </div>
  );
};

export default Home;
