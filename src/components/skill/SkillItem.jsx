import React from "react";
import Skill from "./Skill";
import problemSolving from "../../../public/problemSolving.png";
import dataStructures from "../../../public/dataStructures.png";
import algorithms from "../../../public/algorithms.png";
import cp from "../../../public/cp.png";
import c from "../../../public/c.png";
import cplusplus from "../../../public/c++.png";
import python from "../../../public/python.png";
import java from "../../../public/java.png";
import html5 from "../../../public/html5.png";
import css3 from "../../../public/css3.png";
import javaScript from "../../../public/javaScript.png";
import react from "../../../public/react.png";
import nodejs from "../../../public/nodejs.png";
import express from "../../../public/express.png";
import sql from "../../../public/sql.png";
import mysql from "../../../public/mysql.png";
import dbms from "../../../public/dbms.png";
import oop from "../../../public/oop.png";
import os from "../../../public/os.png";
import git from "../../../public/git.png";
import linux from "../../../public/linux.png";

const SkillItem = () => {
  return (
    <div>
      <div className="skill">
        <div className="inner">
          <div className="header">
            <h1>Technical Skills</h1>
          </div>
          <div className="container">
            <Skill
              image={problemSolving}
              name="Problem Solving"
              desc="Problem solving is writing an original program that performs a particular set of tasks and meets all stated constraints."
            />
            <Skill
              image={dataStructures}
              name="Data Structures"
              desc="A data structure is a specialized format for organizing, processing, retrieving and storing data."
            />
            <Skill
              image={algorithms}
              name="Algorithm Design"
              desc="An algorithm design technique means a unique approach or mathematical method for creating algorithms and solving problems."
            />
            <Skill
              image={cp}
              name="Competitive Programming"
              desc="Competitive programming (also known as sports programming) is a mind sport usually held over the Internet or a local network, involving participants trying to program according to provided specifications."
            />
            <Skill
              image={c}
              name="C"
              desc="C is a general-purpose programming language that is extremely popular, simple, and flexible to use."
            />
            <Skill
              image={cplusplus}
              name="C++"
              desc="C++ is a powerful general-purpose programming language and, an object-oriented programming language."
            />
            <Skill
              image={python}
              name="Python"
              desc="Python is an interpreted, object-oriented, high-level programming language with dynamic semantics."
            />
            <Skill
              image={java}
              name="Java"
              desc="Java is a multi-platform, object-oriented, and network-centric language that can be used as a platform in itself."
            />
            <Skill
              image={html5}
              name="HTML"
              desc="HTML stands for Hyper Text Markup Language. HTML is the standard markup language for creating Web pages."
            />
            <Skill
              image={css3}
              name="CSS"
              desc="CSS stands for Cascading Style Sheets. CSS describes how HTML elements are to be displayed on screen, paper, or in other media."
            />
            <Skill
              image={javaScript}
              name="JavaScript"
              desc="JavaScript is a text-based programming language used both on the client-side and server-side that allows you to make web pages interactive."
            />
            <Skill
              image={react}
              name="React.js"
              desc="React is a JavaScript-based UI development library. It aims to allow developers to create fast user interfaces for websites and applications alike easily."
            />
            <Skill
              image={nodejs}
              name="Node.js"
              desc="Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser."
            />
            <Skill
              image={express}
              name="Express.js"
              desc="Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications."
            />
            <Skill
              image={sql}
              name="SQL"
              desc="Structured query language (SQL) is a standard language for database creation and manipulation. MySQL is a relational database program that uses SQL queries."
            />
            <Skill
              image={mysql}
              name="MySQL"
              desc="MySQL is an open-source relational database management system. As with other relational databases, MySQL stores data in tables made up of rows and columns."
            />
            <Skill
              image={dbms}
              name="Database Management System (DBMS)"
              desc="Database Management Systems (DBMS) are software systems used to store, retrieve, and run queries on data. A DBMS serves as an interface between an end-user and a database, allowing users to create, read, update, and delete data in the database."
            />
            <Skill
              image={oop}
              name="Object Oriented Programming (OOP)"
              desc="Object-oriented programming (OOP) is a computer programming model that organizes software design around data, or objects, rather than functions and logic."
            />
            <Skill
              image={os}
              name="Operating System"
              desc="An operating system (OS) is the program that, after being initially loaded into the computer by a boot program, manages all of the other application programs in a computer."
            />
            <Skill
              image={git}
              name="Git"
              desc="Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency."
            />
            <Skill
              image={linux}
              name="Linux"
              desc="Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
