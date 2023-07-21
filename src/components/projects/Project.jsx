import React, { useState } from "react";
import "./project.scss";

const Project = () => {
  const [cards] = useState([
    {
      title: "Use case of Computer Vision on Medical Domain",
      text: "This is an implementation of computer vision. I have done the front end of this project. This has several features like Brain Tumor Detection, Types of Brain Tumors and can detect Colon Cancer (Colon Benign and Colon Adenocarcinoma)",
    },
    {
      title: "My Personal Portfolio",
      text: "This is my personal Portfolio website. A personal portfolio website is a website that showcases an individual's work, achievements, skills, and experiences. It serves as an online platform to present and promote your professional or creative work to potential employers, clients, or collaborators.",
    },
    {
      title: "Coming Soon",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit architecto eos odit soluta nesciunt nobis, aperiam aspernatur unde molestias! Tempora illum ex expedita quo, eveniet qui dolorum quam in perferendis?",
    },
  ]);

  return (
    <div>
      <section>
        <div className="container">
          <h1>Projects</h1>
          <div className="cards">
            {cards.map((card, index) => (
              <div className="card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <a href="http://wprince00.pythonanywhere.com/">
                  <button className="btn">Show Project</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
