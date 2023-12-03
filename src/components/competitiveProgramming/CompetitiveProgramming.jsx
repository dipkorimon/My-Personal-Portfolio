import React, { useState } from "react";
import "./competitiveProgramming.scss";

const CompetitiveProgramming = () => {
  const [card] = useState([
    {
      title: "CodeForces Profile",
      link: "https://codeforces.com/profile/idip",
      desc: "Codeforces' aim is to offer you a convenient platform to organize, run and discuss programming contests.",
    },
    {
      title: "CodeChef Profile",
      link: "https://www.codechef.com/users/idip",
      desc: "CodeChef is an excellent platform that offers a wide range of practice questions and conducts exceptional contests.",
    },
    {
      title: "LeetCode Profile",
      link: "https://leetcode.com/idip/",
      desc: "LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    },
  ]);

  return (
    <div className="competitiveProgramming">
      <div className="header">
        <h1>Competitive Programming Profiles</h1>
      </div>
      <div className="container">
        {card.map((item, index) => (
          <a href={item.link}>
            <div className="section">
              <h3>
                <a href={item.link}>{item.title}</a>
                <p>{item.desc}</p>
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
