import React from "react";
import "./competitiveProgramming.scss";

const CompetitiveProgramming = () => {
  return (
    <div className="competitiveProgramming">
      <div className="header">
        <h1>Competitive Programming Profiles</h1>
      </div>
      <div className="container">
        <a href="">
          <div className="section">
            <h3>
              <a href="">CodeForces Profile</a>
              <p>
                Codeforces' aim is to offer you a convenient platform to
                organize, run and discuss programming contests.
              </p>
            </h3>
          </div>
        </a>
        <a href="">
          <div className="section">
            <h3>
              <a href="">CodeChef Profile</a>
              <p>
                Codeforces' aim is to offer you a convenient platform to
                organize, run and discuss programming contests.
              </p>
            </h3>
          </div>
        </a>
        <a href="">
          <div className="section">
            <h3>
              <a href="">LeetCode Profile</a>
              <p>
                Codeforces' aim is to offer you a convenient platform to
                organize, run and discuss programming contests.
              </p>
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
