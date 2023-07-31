import React from "react";
import "./competitiveProgramming.scss";

const CompetitiveProgramming = () => {
  return (
    <div className="competitiveProgramming">
      <div className="header">
        <h1>Competitive Programming Profiles</h1>
      </div>
      <div className="container">
        <a href="https://codeforces.com/profile/idip">
          <div className="section">
            <h3>
              <a href="https://codeforces.com/profile/idip">
                CodeForces Profile
              </a>
              <p>
                Codeforces' aim is to offer you a convenient platform to
                organize, run and discuss programming contests.
              </p>
            </h3>
          </div>
        </a>
        <a href="https://www.codechef.com/users/idip">
          <div className="section">
            <h3>
              <a href="https://www.codechef.com/users/idip">CodeChef Profile</a>
              <p>
                CodeChef is an excellent platform that offers a wide range of
                practice questions and conducts exceptional contests.
              </p>
            </h3>
          </div>
        </a>
        <a href="https://leetcode.com/idip/">
          <div className="section">
            <h3>
              <a href="https://leetcode.com/idip/">LeetCode Profile</a>
              <p>
                LeetCode is the best platform to help you enhance your skills,
                expand your knowledge and prepare for technical interviews.
              </p>
            </h3>
          </div>
        </a>
      </div>
    </div>
  );
};

export default CompetitiveProgramming;
